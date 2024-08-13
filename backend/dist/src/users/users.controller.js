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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const routes_decorator_1 = require("../routes/routes.decorator");
const UpdateUser_dto_1 = require("./dto/UpdateUser.dto");
const users_service_1 = require("./users.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
const path_1 = require("path");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getMyUser(params, req) {
        return this.usersService.getMyUser(params.id, req);
    }
    updateBasicInformation(param, dto) {
        return this.usersService.update(param.id, dto);
    }
    updateSensitiveInformation(param, dto) {
        return this.usersService.update(param.id, dto);
    }
    getUsers() {
        return this.usersService.getUsers();
    }
    async uploadProfilePicture(file, userId) {
        await this.usersService.removePreviousProfilePicture(userId);
        const result = await this.usersService.updateProfilePicture(userId, file);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Profile picture uploaded successfully',
            data: result,
        };
    }
    async removeProfilePicture(userId) {
        const result = await this.usersService.removePreviousProfilePicture(userId);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: result.message,
        };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMyUser", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id/update/basicData'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUser_dto_1.BasicInformationDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateBasicInformation", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id/update/sensitiveData'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUser_dto_1.SensitiveInformationDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateSensitiveInformation", null);
__decorate([
    (0, routes_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(':id/upload-profile-picture'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: multer.memoryStorage(),
        fileFilter: (req, file, cb) => {
            const allowedTypes = /jpeg|jpg|png|svg/;
            const fileExtname = (0, path_1.extname)(file.originalname).toLowerCase();
            const extnameValid = allowedTypes.test(fileExtname);
            const mimetypeValid = allowedTypes.test(file.mimetype);
            if (mimetypeValid && extnameValid) {
                return cb(null, true);
            }
            cb(new common_1.BadRequestException('Only .png, .jpg, .jpeg, .svg formats are allowed!'), false);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadProfilePicture", null);
__decorate([
    (0, common_1.Delete)(':id/remove-profile-picture'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeProfilePicture", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map