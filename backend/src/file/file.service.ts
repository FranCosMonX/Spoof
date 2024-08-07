import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { unlink } from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(unlink);

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async uploadFile(file: Express.Multer.File, userId: string) {
    const url = `uploads/${file.filename}`;
    return this.prisma.file.create({
      data: {
        url,
        userId,
      },
    });
  }

  async deleteFileById(fileId: string) {
    // Primeiro, encontre o arquivo no banco de dados
    const file = await this.prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!file) {
      throw new NotFoundException('File not found');
    }

    // Exclua o arquivo do sistema de arquivos
    try {
      await unlinkAsync(file.url);
    } catch (error) {
      console.error('Error deleting file:', error);
      throw new NotFoundException('File not found on disk');
    }

    // Exclua o arquivo do banco de dados
    return this.prisma.file.delete({
      where: { id: fileId },
    });
  }

//   async getAllFileIds() {
//     const files = await this.prisma.file.findMany({
//       select: { id: true },
//     });
//     return files.map(file => file.id);
//   }
}
