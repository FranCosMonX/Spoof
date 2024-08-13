import { IsEmail, IsOptional, IsString, Length } from "class-validator";

export class BasicInformationDTO {
  @IsOptional()
  @IsString({ message: "O nome de usuário deve ser uma String." })
  public usuario: string;

  @IsOptional()
  @IsString({ message: "O telefone de usuário deve ser uma String." })
  public telefone: string;

  @IsOptional()
  @IsString({ message: "A descrição deve ser uma String." })
  public descricao: string;
}

export class SensitiveInformationDTO {
  @IsOptional()
  @IsEmail({}, { message: "O email tem que ter a sintaxe correta." })
  @IsString({ message: "A senha deve ser uma String." })
  public email: string;

  @IsOptional()
  @IsString({ message: "A senha deve ser uma String." })
  @Length(6, 20, { message: "A senha deve ter entre 6 à 20 caracteres" })
  public senha: string;
}