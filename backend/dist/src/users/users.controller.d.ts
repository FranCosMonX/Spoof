import { HttpStatus } from '@nestjs/common';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyUser(params: {
        id: string;
    }, req: any): Promise<{
        user: {
            id: string;
            nome: string;
            usuario: string;
            email: string;
            telefone: string;
            senha: string;
            profilePicture: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    updateBasicInformation(param: {
        id: string;
    }, dto: BasicInformationDTO): Promise<{
        user: {
            id: string;
            nome: string;
            usuario: string;
            email: string;
            telefone: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    updateSensitiveInformation(param: {
        id: string;
    }, dto: SensitiveInformationDTO): Promise<{
        user: {
            id: string;
            nome: string;
            usuario: string;
            email: string;
            telefone: string;
            createdAt: Date;
            updatedAt: Date;
        };
        message: string;
    }>;
    getUsers(): Promise<{
        usuario: string;
        email: string;
        senha: string;
        id: string;
    }[]>;
    uploadProfilePicture(file: Express.Multer.File, userId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            message: string;
            profilePicture: string;
        };
    }>;
    removeProfilePicture(userId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
