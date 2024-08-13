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
exports.SigninDto = void 0;
const class_validator_1 = require("class-validator");
class SigninDto {
}
exports.SigninDto = SigninDto;
__decorate([
    (0, class_validator_1.ValidateIf)(o => !o.email && !o.telefone),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Usuário, email ou telefone são obrigatórios' }),
    __metadata("design:type", String)
], SigninDto.prototype, "usuario", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => !o.usuario && !o.telefone),
    (0, class_validator_1.IsEmail)({}, { message: 'Deve ser um email válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Usuário, email ou telefone são obrigatórios' }),
    __metadata("design:type", String)
], SigninDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => !o.email && !o.usuario),
    (0, class_validator_1.IsNotEmpty)({ message: 'Usuário, email ou telefone são obrigatórios' }),
    __metadata("design:type", String)
], SigninDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Senha é obrigatória' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 20, { message: 'Senha deve ter entre 3 e 20 caracteres' }),
    __metadata("design:type", String)
], SigninDto.prototype, "senha", void 0);
//# sourceMappingURL=signin.dto.js.map