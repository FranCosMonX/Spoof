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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const routes_decorator_1 = require("../routes/routes.decorator");
const objeto_service_1 = require("./objeto.service");
let ObjetoController = class ObjetoController {
    constructor(objetoService) {
        this.objetoService = objetoService;
    }
    async uploadFile(file, userId, req) {
        if (!file) {
            throw new common_1.BadRequestException('Nenhum arquivo enviado.');
        }
        const { description, tags } = req.body;
        const result = await this.objetoService.uploadFile(file, userId, description, tags ? tags.split(',') : []);
        return {
            message: 'Arquivo enviado com sucesso',
            data: result,
        };
    }
    async deleteFile(userId, fileId) {
        const deletedFile = await this.objetoService.deleteFileById(userId, fileId);
        return {
            message: 'Arquivo excluído com sucesso',
            data: deletedFile,
        };
    }
    async searchObjetos(userId, keyword) {
        if (!keyword) {
            throw new common_1.BadRequestException('Keyword é obrigatória');
        }
        const results = await this.objetoService.searchObjetos(userId, keyword);
        return {
            message: 'Resultados da pesquisa',
            data: results,
        };
    }
    async listAllFiles(userId) {
        const files = await this.objetoService.listAllFiles(userId);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Arquivos recuperados com sucesso',
            data: files,
        };
    }
    async updateObjeto(userId, fileId, updateData) {
        const updatedObjeto = await this.objetoService.updateObjeto(userId, fileId, updateData);
        return {
            message: 'Objeto atualizado com sucesso',
            data: updatedObjeto,
        };
    }
    async getObjetoDetails(userId, fileId) {
        const objetoDetails = await this.objetoService.getObjetoDetails(userId, fileId);
        return {
            message: 'Detalhes do objeto',
            data: objetoDetails,
        };
    }
    async getFile(fileId, res) {
        const result = await this.objetoService.getFile(fileId);
        res.set('Content-type', result.mime);
        return res.send(result.fileBuffer);
    }
};
exports.ObjetoController = ObjetoController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(':userId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        fileFilter: (req, file, cb) => {
            const videoTypes = /mp4|mpg|avi|wmv|mov|webm/;
            const audioTypes = /mp3|wav|pcm|flac|ogg/;
            const imageTypes = /jpeg|jpg|png|svg|gif|webp/;
            const fileExtname = (0, path_1.extname)(file.originalname).toLowerCase();
            const mimetype = file.mimetype.toLowerCase();
            const isVideo = videoTypes.test(fileExtname) || videoTypes.test(mimetype);
            const isAudio = audioTypes.test(fileExtname) || audioTypes.test(mimetype);
            const isImage = imageTypes.test(fileExtname) || imageTypes.test(mimetype);
            if (isVideo || isAudio || isImage) {
                return cb(null, true);
            }
            cb(new common_1.BadRequestException('Tipo de arquivo não suportado.'), false);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':userId/:fileId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "deleteFile", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':userId/search'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "searchObjetos", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':userId/list'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "listAllFiles", null);
__decorate([
    (0, common_1.Patch)(':userId/:fileId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('fileId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "updateObjeto", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, routes_decorator_1.Public)(),
    (0, common_1.Get)(':userId/:fileId/detalhes'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "getObjetoDetails", null);
__decorate([
    (0, routes_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':fileId/upload'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ObjetoController.prototype, "getFile", null);
exports.ObjetoController = ObjetoController = __decorate([
    (0, common_1.Controller)('objeto'),
    __metadata("design:paramtypes", [objeto_service_1.ObjetoService])
], ObjetoController);
//# sourceMappingURL=objeto.controller.js.map