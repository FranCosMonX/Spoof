import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private authService: AuthService) { }

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
        const user = await this.prisma.usuario.findUnique({ where: { id } });

        if (!user) {
            throw new BadRequestException("Usuário não existe.");
        }

        if ('usuario' in data || 'descricao' in data || 'telefone' in data) {
            const userData = data as BasicInformationDTO;

            const result = await this.prisma.usuario.update({
                where: { id },
                data: { telefone: userData.telefone, usuario: userData.usuario, updatedAt: new Date() }
            })

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
                messga: "Informaçãos básicas alteradas com sucesso!"
            }
        } else if ('senha' in data || 'email' in data) {
            const userData = data as SensitiveInformationDTO;

            if ('senha' in data) {
                const hashedPassword = await this.authService.hashPassword(userData.senha);
                await this.prisma.usuario.update({
                    where: { id },
                    data: { senha: hashedPassword }
                })
            }

            if ('email' in data) {
                await this.prisma.usuario.update({
                    where: { id },
                    data: { email: userData.email, updatedAt: new Date() }
                })
            }

            const result = await this.prisma.usuario.findFirst({
                where: { id }
            })

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
                message: "Informaçãos sensíveis alteradas com sucesso!"
            }
        } else {
            throw new ForbiddenException();
        }
    }

    async getUsers() {
        return await this.prisma.usuario.findMany({
            select: { id: true, email: true, usuario: true, senha: true },
        });
    }
}
