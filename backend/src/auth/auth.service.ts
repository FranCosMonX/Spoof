import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto'; // Importando o novo DTO
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async signup(dto: AuthDto) {
        console.log('DTO recebido:', dto);

        const { nome, email, usuario, telefone, senha } = dto;

        if (!email || !usuario || !telefone) {
            throw new BadRequestException('Email, username e telefone são obrigatórios');
        }

        const emailExists = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (emailExists) {
            throw new BadRequestException('Email já existe');
        }

        const usernameExists = await this.prisma.usuario.findUnique({
            where: { usuario },
        });

        if (usernameExists) {
            throw new BadRequestException('Username já existe');
        }

        const telefoneExists = await this.prisma.usuario.findUnique({
            where: { telefone },
        });

        if (telefoneExists) {
            throw new BadRequestException('Telefone já existe');
        }

        const hashedPassword = await this.hashPassword(senha);

        await this.prisma.usuario.create({
            data: {
                nome,
                email,
                usuario,
                telefone,
                senha: hashedPassword,
            },
        });

        return { message: 'Cadastrado com sucesso!' };
    }

    async signin(dto: SigninDto, req: Request, res: Response) {
        const { email, usuario, telefone, senha } = dto;

        // Verificação para garantir que ao menos email, username ou telefone sejam fornecidos
        if (!email && !usuario && !telefone) {
            throw new BadRequestException('Email, username ou telefone devem ser fornecidos');
        }

        const user = email
            ? await this.prisma.usuario.findUnique({ where: { email } })
            : usuario
            ? await this.prisma.usuario.findUnique({ where: { usuario } })
            : await this.prisma.usuario.findUnique({ where: { telefone } });

        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const passwordMatches = await bcrypt.compare(senha, user.senha);

        if (!passwordMatches) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        // Assinando o token JWT
        const token = await this.signToken({ id: user.id, email: user.email });

        if (!token) {
            throw new ForbiddenException();
        }
        
        res.cookie('token', token);

        return res.send({ message: 'Login bem-sucedido' });
    }

    async signout(req: Request, res: Response) {
        res.clearCookie('token');
        return res.send({ message: 'Logout bem-sucedido' });
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword;
    }

    async signToken(args: { id: string, email: string }) {
        const payload = args;
        return this.jwt.signAsync(payload, { secret: jwtSecret });
    }
}
