import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { S3 } from 'aws-sdk';
import { promisify } from 'util';
import { unlink } from 'fs';

const unlinkAsync = promisify(unlink);

@Injectable()
export class UsersService {
  private readonly s3: S3;
  private readonly DEFAULT_PROFILE_PICTURE = 'uploads/profile-pictures/default-profile.png';
  private readonly BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

  constructor(private prisma: PrismaService, private authService: AuthService) {
    this.s3 = new S3({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async getMyUser(id: string, req: Request) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException();
    }

    const decodedUser = req.user as { id: string; email: string };

    if (user.id !== decodedUser.id) {
      throw new ForbiddenException();
    }

    delete user.senha;

    return { user };
  }

  async update(id: string, data: BasicInformationDTO | SensitiveInformationDTO) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });

    if (!user) {
      throw new BadRequestException("Usuário não existe.");
    }

    if ('usuario' in data || 'descricao' in data || 'telefone' in data) {
      const userData = data as BasicInformationDTO;

      const result = await this.prisma.usuario.update({
        where: { id },
        data: { telefone: userData.telefone, usuario: userData.usuario, updatedAt: new Date() }
      });

      return {
        user: {
          id: result.id,
          nome: result.nome,
          usuario: result.usuario,
          email: result.email,
          telefone: result.telefone,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        },
        message: "Informações básicas alteradas com sucesso!"
      };
    } else if ('senha' in data || 'email' in data) {
      const userData = data as SensitiveInformationDTO;

      if ('senha' in data) {
        const hashedPassword = await this.authService.hashPassword(userData.senha);
        await this.prisma.usuario.update({
          where: { id },
          data: { senha: hashedPassword }
        });
      }

      if ('email' in data) {
        await this.prisma.usuario.update({
          where: { id },
          data: { email: userData.email, updatedAt: new Date() }
        });
      }

      const result = await this.prisma.usuario.findFirst({
        where: { id }
      });

      return {
        user: {
          id: result.id,
          nome: result.nome,
          usuario: result.usuario,
          email: result.email,
          telefone: result.telefone,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        },
        message: "Informações sensíveis alteradas com sucesso!"
      };
    } else {
      throw new ForbiddenException();
    }
  }

  async getUsers() {
    return await this.prisma.usuario.findMany({
      select: { id: true, email: true, usuario: true, senha: true },
    });
  }

  async updateProfilePicture(userId: string, file: Express.Multer.File) {
    const user = await this.prisma.usuario.findUnique({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException("Usuário não encontrado.");
    }

    const fileName = `${Date.now()}-${file.originalname}`;
    const params = {
      Bucket: this.BUCKET_NAME,
      Key: `profile-pictures/${fileName}`,
      Body: file.buffer, // Certifique-se de que o buffer está sendo usado aqui
      ContentType: file.mimetype,
    };

    try {
      const data = await this.s3.upload(params).promise();
      const profilePictureUrl = data.Location;

      await this.prisma.usuario.update({
        where: { id: userId },
        data: { profilePicture: profilePictureUrl },
      });

      if (user.profilePicture && user.profilePicture !== this.DEFAULT_PROFILE_PICTURE) {
        const oldParams = {
          Bucket: this.BUCKET_NAME,
          Key: `profile-pictures/${user.profilePicture.split('/').pop()}`,
        };
        await this.s3.deleteObject(oldParams).promise();
      }

      return {
        message: 'Foto de perfil atualizada com sucesso!',
        profilePicture: profilePictureUrl,
      };
    } catch (error) {
      console.error('Erro ao enviar foto de perfil para o S3:', error);
      throw new BadRequestException('Erro ao atualizar a foto de perfil.');
    }
  }

  async removePreviousProfilePicture(userId: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { id: userId },
      select: { profilePicture: true },
    });

    if (!user) {
      throw new NotFoundException("Usuário não encontrado.");
    }

    const previousProfilePicture = user.profilePicture;

    if (!previousProfilePicture || previousProfilePicture === this.DEFAULT_PROFILE_PICTURE) {
      return { message: 'A foto de perfil já é a foto padrão ou não existe.' };
    }

    const fileName = previousProfilePicture.split('/').pop();
    const params = {
      Bucket: this.BUCKET_NAME,
      Key: `profile-pictures/${fileName}`,
    };

    try {
      await this.s3.deleteObject(params).promise();
      await this.prisma.usuario.update({
        where: { id: userId },
        data: { profilePicture: this.DEFAULT_PROFILE_PICTURE },
      });
      return { message: 'Foto de perfil excluída com sucesso.' };
    } catch (error) {
      console.error('Erro ao remover foto de perfil do S3:', error);
      throw new BadRequestException('Erro ao remover a foto de perfil.');
    }
  }
}
