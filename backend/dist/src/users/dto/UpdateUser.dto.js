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
exports.SensitiveInformationDTO = exports.BasicInformationDTO = void 0;
const class_validator_1 = require("class-validator");
class BasicInformationDTO {
}
exports.BasicInformationDTO = BasicInformationDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "O nome de usuário deve ser uma String." }),
    __metadata("design:type", String)
], BasicInformationDTO.prototype, "usuario", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "O telefone de usuário deve ser uma String." }),
    __metadata("design:type", String)
], BasicInformationDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "A descrição deve ser uma String." }),
    __metadata("design:type", String)
], BasicInformationDTO.prototype, "descricao", void 0);
class SensitiveInformationDTO {
}
exports.SensitiveInformationDTO = SensitiveInformationDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: "O email tem que ter a sintaxe correta." }),
    (0, class_validator_1.IsString)({ message: "A senha deve ser uma String." }),
    __metadata("design:type", String)
], SensitiveInformationDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "A senha deve ser uma String." }),
    (0, class_validator_1.Length)(6, 20, { message: "A senha deve ter entre 6 à 20 caracteres" }),
    __metadata("design:type", String)
], SensitiveInformationDTO.prototype, "senha", void 0);
//# sourceMappingURL=UpdateUser.dto.js.map