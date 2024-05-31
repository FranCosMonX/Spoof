import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
