import { IsEmail, IsString, Max, Min } from "class-validator";

export class BasicInformationDTO {
  @IsString({ message: "O nome de usuário deve ser uma String." })
  public usuario: string;

  @IsString({ message: "O telefone de usuário deve ser uma String." })
  public telefone: string;

  @IsString({ message: "A descrição deve ser uma String." })
  public descrição: string;
}

export class SensitiveInformationDTO {
  @IsEmail(null, { message: "O email tem que ter a sintaxe correta." })
  @IsString({ message: "A senha deve ser uma String." })
  public email: string;

  @IsString({ message: "A senha deve ser uma String." })
  @Min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
  @Max(20, { message: "A senha deve ter no máximo 20 caracteres." })
  public senha: string;
}