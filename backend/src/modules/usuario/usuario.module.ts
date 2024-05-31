import { Module } from '@nestjs/common';
import { ModulesController } from './usuario.controller';
import { ModulesService } from './usuario.service';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule { }
