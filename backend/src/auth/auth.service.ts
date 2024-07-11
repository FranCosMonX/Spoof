import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signup(dto: AuthDto) {
        // Adiciona um log para verificar os valores recebidos
        console.log('DTO recebido:', dto);

        const { name, email, username, password } = dto;

        if (!email || !username) {
            throw new BadRequestException('Email e username são obrigatórios');
        }

        const emailExists = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (emailExists) {
            throw new BadRequestException('Email já existe');
        }

        const usernameExists = await this.prisma.usuario.findUnique({
            where: { username },
        });

        if (usernameExists) {
            throw new BadRequestException('Username já existe');
        }

        const hashedPassword = await this.hashPassword(password);

        await this.prisma.usuario.create({
            data: {
                name,
                email,
                username,
                password: hashedPassword, // Salve a senha criptografada
            },
        });

        return { message: 'Cadastrado com sucesso!' };
    }

    async signin() {
        // Implemente a lógica de signin aqui se necessário
        return '';
    }

    async signout() {
        // Implemente a lógica de signout aqui se necessário
        return '';
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword;
    }
}
