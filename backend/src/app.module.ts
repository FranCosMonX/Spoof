import { Module } from '@nestjs/common';
// import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  // imports: [UsuarioModule, AuthModule],
  imports: [AuthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
