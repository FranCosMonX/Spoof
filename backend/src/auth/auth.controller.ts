import { Body, Controller, Get, Post, Request, Res, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Res() res, @Body() dto: SigninDto) {
    const token = await this.authService.signin(dto);
    res.setHeader("authorization", `Bearer ${token.accesss_token}`)
    console.log("token: " + token.accesss_token)
    return res.send({ message: 'Login bem sucedido' });
  }

  @Get('signout')
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}
