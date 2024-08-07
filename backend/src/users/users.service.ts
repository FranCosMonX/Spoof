import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { unlink } from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(unlink);
const DEFAULT_PROFILE_PICTURE = 'uploads/profile-pictures/default-profile.png'; // Defina o caminho para a imagem padrão

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private authService: AuthService) {}

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

    async updateProfilePicture(userId: string, profilePicture: string) {
        await this.removePreviousProfilePicture(userId);
        return this.prisma.usuario.update({
            where: { id: userId },
            data: { profilePicture },
        });
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

        if (!previousProfilePicture) {
            await this.prisma.usuario.update({
                where: { id: userId },
                data: { profilePicture: DEFAULT_PROFILE_PICTURE },
            });
            return { message: 'Nenhuma foto de perfil para excluir. Foto padrão atribuída.' };
        }

        if (previousProfilePicture === DEFAULT_PROFILE_PICTURE) {
            return { message: 'A foto de perfil já é a foto padrão.' };
        }

        const filePath = previousProfilePicture;

        try {
            await unlinkAsync(filePath);
            await this.prisma.usuario.update({
                where: { id: userId },
                data: { profilePicture: DEFAULT_PROFILE_PICTURE },
            });
            return { message: 'Foto de perfil excluída com sucesso. Foto padrão atribuída.' };
        } catch (error) {
            console.error('Erro ao excluir o arquivo:', error);
            throw new BadRequestException('Erro ao excluir o arquivo de foto de perfil.');
        }
    }
}
