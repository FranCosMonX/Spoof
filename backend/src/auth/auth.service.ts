import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { jwtSecret } from '../utils/constants';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto'; // Importando o novo DTO

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    /**
     * Fazer o processamento dos dados de cadastro e informar o resultado para o usuário
     * @param dto Informações para cadastrar um usuário
     * @returns 
     */
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

    /**
     * Fazer o processamento dos dados de login e gerar o Token de acesso
     * @param dto Informações de login do usuário
     * @returns 
     */
    async signin(dto: SigninDto) {
        const { email, usuario, telefone, senha } = dto;

        // Verificação para garantir que ao menos email, username ou telefone sejam fornecidos
        if (!email && !usuario && !telefone) {
            throw new BadRequestException('Email, username ou telefone devem ser fornecidos');
        }

        const user = 'email' in dto
            ? await this.prisma.usuario.findUnique({ where: { email } })
            : 'usuario' in dto
                ? await this.prisma.usuario.findUnique({ where: { usuario } })
                : await this.prisma.usuario.findUnique({ where: { telefone } });

        console.log(dto)
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

        return {
            message: 'Login bem sucedido',
            accesss_token: token,
            user_id: user.id
        };
    }

    async signout() {
        // res.clearCookie('token');
        // return res.send({ message: 'Logout bem-sucedido' });
        //removendo token
        return { message: 'Logout bem-sucedido' }
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
