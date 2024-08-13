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
exports.ObjetoService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const path_1 = require("path");
const prisma_service_1 = require("../../prisma/prisma.service");
const s3 = new aws_sdk_1.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
let ObjetoService = class ObjetoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async uploadFile(file, userId, description, tags) {
        if (!file || !file.buffer) {
            throw new common_1.BadRequestException('Nenhum arquivo válido encontrado.');
        }
        const fileExtension = (0, path_1.extname)(file.originalname).toLowerCase();
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExtension}`;
        const fileKey = `uploads/${fileName}`;
        console.log('Bucket:', process.env.AWS_S3_BUCKET_NAME);
        try {
            await s3.upload({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: fileKey,
                Body: file.buffer,
                ContentType: file.mimetype,
            }).promise();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao enviar arquivo para o S3');
        }
        return this.prisma.objeto.create({
            data: {
                name: file.originalname,
                description: description ?? '',
                url: fileKey,
                tags: tags ?? [],
                userId,
            },
        });
    }
    async deleteFileById(userId, fileId) {
        const file = await this.prisma.objeto.findFirst({
            where: {
                id: fileId,
                userId,
            },
        });
        if (!file) {
            throw new common_1.NotFoundException('Arquivo não encontrado ou não pertence ao usuário');
        }
        try {
            await s3.deleteObject({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: file.url,
            }).promise();
        }
        catch (error) {
            throw new common_1.NotFoundException('Arquivo não encontrado no S3');
        }
        return this.prisma.objeto.delete({
            where: { id: fileId },
        });
    }
    async searchObjetos(userId, keyword) {
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
    async updateObjeto(userId, fileId, updateData) {
        const objeto = await this.prisma.objeto.findFirst({
            where: {
                id: fileId,
                userId,
            },
        });
        if (!objeto) {
            throw new common_1.NotFoundException('Objeto não encontrado ou não pertence ao usuário');
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
    async listAllFiles(userId) {
        return this.prisma.objeto.findMany({
            where: { userId },
        });
    }
    async getObjetoDetails(userId, fileId) {
        const objeto = await this.prisma.objeto.findFirst({
            where: {
                id: fileId,
                userId,
            },
        });
        if (!objeto) {
            throw new common_1.NotFoundException('Objeto não encontrado ou não pertence ao usuário');
        }
        return objeto;
    }
    async getFile(objectId) {
        const result = await this.prisma.objeto.findFirst({
            where: { id: objectId },
            select: { url: true, }
        });
        if (!result)
            throw new common_1.BadRequestException("Arquivo não encontrado");
        const getObjectParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: result.url,
        };
        try {
            const objectData = await s3.getObject(getObjectParams).promise();
            if (objectData.Body) {
                return {
                    fileBuffer: objectData.Body,
                    mime: objectData.ContentType
                };
            }
            else {
                throw new common_1.BadRequestException('O arquivo no S3 está vazio ou não pode ser acessado');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao acessar o S3');
        }
    }
};
exports.ObjetoService = ObjetoService;
exports.ObjetoService = ObjetoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ObjetoService);
//# sourceMappingURL=objeto.service.js.map