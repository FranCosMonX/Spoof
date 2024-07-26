import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/routes/routes.decorator';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Login } from './dto/response.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signup(@Res() res: Response, @Body() dto: AuthDto) {
    const result = await this.authService.signup(dto);
    console.log(result)
    return res.send(result);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Res() res, @Body() dto: SigninDto): Promise<Login> {
    const result = await this.authService.signin(dto);
    console.log(result)
    return res.send(result);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Get('signout')
  signout(@Res() res) {
    const result = this.authService.signout();
    console.log(result)
    return res.send(result)
  }
}
