import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Login } from './dto/response.dto';
import { SigninDto } from './dto/signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(res: Response, dto: AuthDto): Promise<Response<any, Record<string, any>>>;
    signin(res: any, dto: SigninDto): Promise<Login>;
    signout(res: any): any;
}
