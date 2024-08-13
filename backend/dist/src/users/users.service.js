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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const fs_1 = require("fs");
const prisma_service_1 = require("../../prisma/prisma.service");
const util_1 = require("util");
const auth_service_1 = require("../auth/auth.service");
const unlinkAsync = (0, util_1.promisify)(fs_1.unlink);
let UsersService = class UsersService {
    constructor(prisma, authService) {
        this.prisma = prisma;
        this.authService = authService;
        this.DEFAULT_PROFILE_PICTURE = 'uploads/profile-pictures/default-profile.png';
        this.BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
        this.s3 = new aws_sdk_1.S3({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    async getMyUser(id, req) {
        const user = await this.prisma.usuario.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const decodedUser = req.user;
        if (user.id !== decodedUser.id) {
            throw new common_1.ForbiddenException();
        }
        delete user.senha;
        return { user };
    }
    async update(id, data) {
        const user = await this.prisma.usuario.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.BadRequestException("Usuário não existe.");
        }
        if ('usuario' in data || 'descricao' in data || 'telefone' in data) {
            const userData = data;
            const result = await this.prisma.usuario.update({
                where: { id },
                data: { telefone: userData.telefone, usuario: userData.usuario, updatedAt: new Date() }
            });
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
                message: "Informações básicas alteradas com sucesso!"
            };
        }
        else if ('senha' in data || 'email' in data) {
            const userData = data;
            if ('senha' in data) {
                const hashedPassword = await this.authService.hashPassword(userData.senha);
                await this.prisma.usuario.update({
                    where: { id },
                    data: { senha: hashedPassword }
                });
            }
            if ('email' in data) {
                await this.prisma.usuario.update({
                    where: { id },
                    data: { email: userData.email, updatedAt: new Date() }
                });
            }
            const result = await this.prisma.usuario.findFirst({
                where: { id }
            });
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
                message: "Informações sensíveis alteradas com sucesso!"
            };
        }
        else {
            throw new common_1.ForbiddenException();
        }
    }
    async getUsers() {
        return await this.prisma.usuario.findMany({
            select: { id: true, email: true, usuario: true, senha: true },
        });
    }
    async updateProfilePicture(userId, file) {
        const user = await this.prisma.usuario.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException("Usuário não encontrado.");
        }
        const fileName = `${Date.now()}-${file.originalname}`;
        const params = {
            Bucket: this.BUCKET_NAME,
            Key: `profile-pictures/${fileName}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        };
        try {
            const data = await this.s3.upload(params).promise();
            const profilePictureUrl = data.Location;
            await this.prisma.usuario.update({
                where: { id: userId },
                data: { profilePicture: profilePictureUrl },
            });
            if (user.profilePicture && user.profilePicture !== this.DEFAULT_PROFILE_PICTURE) {
                const oldParams = {
                    Bucket: this.BUCKET_NAME,
                    Key: `profile-pictures/${user.profilePicture.split('/').pop()}`,
                };
                await this.s3.deleteObject(oldParams).promise();
            }
            return {
                message: 'Foto de perfil atualizada com sucesso!',
                profilePicture: profilePictureUrl,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao atualizar a foto de perfil.');
        }
    }
    async removePreviousProfilePicture(userId) {
        const user = await this.prisma.usuario.findUnique({
            where: { id: userId },
            select: { profilePicture: true },
        });
        if (!user) {
            throw new common_1.NotFoundException("Usuário não encontrado.");
        }
        const previousProfilePicture = user.profilePicture;
        if (!previousProfilePicture || previousProfilePicture === this.DEFAULT_PROFILE_PICTURE) {
            return { message: 'A foto de perfil já é a foto padrão ou não existe.' };
        }
        const fileName = previousProfilePicture.split('/').pop();
        const params = {
            Bucket: this.BUCKET_NAME,
            Key: `profile-pictures/${fileName}`,
        };
        try {
            await this.s3.deleteObject(params).promise();
            await this.prisma.usuario.update({
                where: { id: userId },
                data: { profilePicture: this.DEFAULT_PROFILE_PICTURE },
            });
            return { message: 'Foto de perfil excluída com sucesso.' };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao remover a foto de perfil.');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map