import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

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

    async getUsers() {
        return await this.prisma.usuario.findMany({
            select: { id: true, email: true, usuario: true },
        });
    }
}
