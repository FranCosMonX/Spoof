import { IsNotEmpty, IsString, IsEmail, ValidateIf, Length, IsPhoneNumber } from "class-validator";

export class SigninDto {
    @ValidateIf(o => !o.email && !o.telefone)
    @IsString()
    @IsNotEmpty({ message: 'Usuário, email ou telefone são obrigatórios' })
    public usuario: string;

    @ValidateIf(o => !o.usuario && !o.telefone)
    @IsEmail({}, { message: 'Deve ser um email válido' })
    @IsNotEmpty({ message: 'Usuário, email ou telefone são obrigatórios' })
    public email: string;

    @ValidateIf(o => !o.email && !o.usuario)
    @IsNotEmpty({ message: 'Usuário, email ou telefone são obrigatórios' })
    public telefone: string;

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @IsString()
    @Length(3, 20, { message: 'Senha deve ter entre 3 e 20 caracteres' })
    public senha: string;
}
