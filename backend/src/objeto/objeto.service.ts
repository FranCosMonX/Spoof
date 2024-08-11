import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { unlink } from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(unlink);

@Injectable()
export class ObjetoService {
  constructor(private prisma: PrismaService) {}

  async uploadFile(file: Express.Multer.File, userId: string, description?: string, tags?: string[]) {
    const url = `uploads/${file.filename}`;
    return this.prisma.objeto.create({
      data: {
        name: file.originalname,
        description: description ?? '',
        url,
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
      await unlinkAsync(file.url);
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
      throw new NotFoundException('Arquivo não encontrado no disco');
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
}
