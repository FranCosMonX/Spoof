import { IsNotEmpty, IsString, IsEmail, Length} from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    public nome: string;

    @IsNotEmpty()
    @IsString()
    public usuario: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    public telefone: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Senha deve ter entre 3 e 20 caracteres' })
    public senha: string;
}
