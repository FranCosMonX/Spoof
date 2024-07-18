import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({
    signOptions: {
      expiresIn: "30m"
    }
  }), PassportModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
