import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    /**
     * Obter informações do Usuário logado
     * @param id 
     * @param req 
     * @returns 
     */
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

    /**
     * Service para atualizar informações do usuário
     * @param id 
     * @param data 
     * @returns 
     */
    async update(id: string, data: BasicInformationDTO | SensitiveInformationDTO) {
        if ('usuario' in data || 'descricao' in data || 'telefone' in data) {
            const userData = data as BasicInformationDTO;
            const user = await this.prisma.usuario.findUnique({ where: { id } });

            if (!user) {
                throw new BadRequestException();
            }
            console.log("teste")

            const result = await this.prisma.usuario.update({
                where: { id },
                data: { telefone: userData.telefone, usuario: userData.usuario, updatedAt: new Date() }
            })
            console.log(result)
            return result
        } else {
            console.log("error")
            console.log(data)
        }
    }

    async getUsers() {
        return await this.prisma.usuario.findMany({
            select: { id: true, email: true, usuario: true },
        });
    }
}
