import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { extname } from 'path';
import { PrismaService } from 'prisma/prisma.service';

// Configuração do AWS S3
const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class ObjetoService {
  constructor(private prisma: PrismaService) { }

  async uploadFile(file: Express.Multer.File, userId: string, description?: string, tags?: string[]) {
    if (!file || !file.buffer) {
      throw new BadRequestException('Nenhum arquivo válido encontrado.');
    }

    const fileExtension = extname(file.originalname).toLowerCase();
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExtension}`;
    const fileKey = `uploads/${fileName}`;

    console.log('Bucket:', process.env.AWS_S3_BUCKET_NAME); // Log para verificar a variável

    try {
      // Upload para o S3
      await s3.upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME, // Atualizado para corresponder ao .env
        Key: fileKey,
        Body: file.buffer, // Certifique-se de que file.buffer está presente
        ContentType: file.mimetype,
      }).promise();
    } catch (error) {
      //console.error('Erro ao enviar arquivo para o S3:', error);
      throw new BadRequestException('Erro ao enviar arquivo para o S3');
    }

    return this.prisma.objeto.create({
      data: {
        name: file.originalname,
        description: description ?? '',
        url: fileKey, // URL é o chave do arquivo no S3
        tags: tags ?? [],
        userId,
      },
    });
  }

  async deleteFileById(userId: string, fileId: string) {
    const file = await this.prisma.objeto.findFirst({
      where: {
        id: fileId,
        userId,
      },
    });

    if (!file) {
      throw new NotFoundException('Arquivo não encontrado ou não pertence ao usuário');
    }

    try {
      // Deletar do S3
      await s3.deleteObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME, // Atualizado para corresponder ao .env
        Key: file.url,
      }).promise();
    } catch (error) {
      //console.error('Erro ao excluir arquivo do S3:', error);
      throw new NotFoundException('Arquivo não encontrado no S3');
    }

    return this.prisma.objeto.delete({
      where: { id: fileId },
    });
  }


  async searchObjetos(userId: string, keyword: string) {
    return this.prisma.objeto.findMany({
      where: {
        userId,
        OR: [
          { description: { contains: keyword, mode: 'insensitive' } },
          { name: { contains: keyword, mode: 'insensitive' } },
          { tags: { has: keyword } },
        ],
      },
    });
  }

  async updateObjeto(userId: string, fileId: string, updateData: { name?: string; description?: string; tags?: string[] }) {
    const objeto = await this.prisma.objeto.findFirst({
      where: {
        id: fileId,
        userId,
      },
    });

    if (!objeto) {
      throw new NotFoundException('Objeto não encontrado ou não pertence ao usuário');
    }

    return this.prisma.objeto.update({
      where: { id: fileId },
      data: {
        name: updateData.name ?? objeto.name,
        description: updateData.description ?? objeto.description,
        tags: updateData.tags ?? objeto.tags,
      },
    });
  }

  async listAllFiles(userId: string) {
    return this.prisma.objeto.findMany({
      where: { userId },
    });
  }

  async getObjetoDetails(userId: string, fileId: string) {
    const objeto = await this.prisma.objeto.findFirst({
      where: {
        id: fileId,
        userId,
      },
    });

    if (!objeto) {
      throw new NotFoundException('Objeto não encontrado ou não pertence ao usuário');
    }

    return objeto;
  }

  async getFile(objectId: string) {
    const result = await this.prisma.objeto.findFirst({
      where: { id: objectId },
      select: { url: true, }
    })

    if (!result) throw new BadRequestException("Arquivo não encontrado")

    const getObjectParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: result.url,
    };

    try {
      const objectData = await s3.getObject(getObjectParams).promise();
      //console.log('Object Data coletado:', objectData); // Adicionado para depuração

      if (objectData.Body) {
        return {
          fileBuffer: objectData.Body as Buffer,
          mime: objectData.ContentType as string
        }
      } else {
        throw new BadRequestException('O arquivo no S3 está vazio ou não pode ser acessado');
      }
    } catch (error) {
      //console.error('Erro ao acessar o S3:', error);
      throw new BadRequestException('Erro ao acessar o S3');
    }
  }
}
