import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Password must be between 3 and 20 characters' })
    public password: string;
}
