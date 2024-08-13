"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../prisma/prisma.service");
const constants_1 = require("../utils/constants");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async signup(dto) {
        const { nome, email, usuario, telefone, senha } = dto;
        if (!email || !usuario || !telefone) {
            throw new common_1.BadRequestException('Email, username e telefone são obrigatórios');
        }
        const emailExists = await this.prisma.usuario.findUnique({
            where: { email },
        });
        if (emailExists) {
            throw new common_1.BadRequestException('Email já existe');
        }
        const usernameExists = await this.prisma.usuario.findUnique({
            where: { usuario },
        });
        if (usernameExists) {
            throw new common_1.BadRequestException('Username já existe');
        }
        const telefoneExists = await this.prisma.usuario.findUnique({
            where: { telefone },
        });
        if (telefoneExists) {
            throw new common_1.BadRequestException('Telefone já existe');
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
    async signin(dto) {
        const { email, usuario, telefone, senha } = dto;
        if (!email && !usuario && !telefone) {
            throw new common_1.BadRequestException('Email, username ou telefone devem ser fornecidos');
        }
        const user = 'email' in dto
            ? await this.prisma.usuario.findUnique({ where: { email } })
            : 'usuario' in dto
                ? await this.prisma.usuario.findUnique({ where: { usuario } })
                : await this.prisma.usuario.findUnique({ where: { telefone } });
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        const passwordMatches = await bcrypt.compare(senha, user.senha);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        const token = await this.signToken({ id: user.id, email: user.email });
        if (!token) {
            throw new common_1.ForbiddenException();
        }
        return {
            message: 'Login bem sucedido',
            accesss_token: token,
            user_id: user.id
        };
    }
    async signout() {
        return { message: 'Logout bem-sucedido' };
    }
    async hashPassword(password) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword;
    }
    async signToken(args) {
        const payload = args;
        return this.jwt.signAsync(payload, { secret: constants_1.jwtSecret });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map