import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
export declare class UsersService {
    private prisma;
    private authService;
    private readonly s3;
    private readonly DEFAULT_PROFILE_PICTURE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, authService: AuthService);
    getMyUser(id: string, req: Request): Promise<{
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
    update(id: string, data: BasicInformationDTO | SensitiveInformationDTO): Promise<{
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
    updateProfilePicture(userId: string, file: Express.Multer.File): Promise<{
        message: string;
        profilePicture: string;
    }>;
    removePreviousProfilePicture(userId: string): Promise<{
        message: string;
    }>;
}
