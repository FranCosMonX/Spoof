import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/usuario/usuario.module';

@Module({
  imports: [ModulesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
