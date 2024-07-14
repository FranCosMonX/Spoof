import { Body, Controller, Get, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);  
  }
  @Post('signin')
  signin(@Request() req, @Response() res, @Body() dto: SigninDto) {
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}
