import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signup(dto: AuthDto): Promise<{
        message: string;
    }>;
    signin(dto: SigninDto): Promise<{
        message: string;
        accesss_token: string;
        user_id: string;
    }>;
    signout(): Promise<{
        message: string;
    }>;
    hashPassword(password: string): Promise<string>;
    signToken(args: {
        id: string;
        email: string;
    }): Promise<string>;
}
