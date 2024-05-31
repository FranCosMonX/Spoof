import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ModulesController } from './usuario.controller';
import { ModulesService } from './usuario.service';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService, PrismaService],
})
export class ModulesModule { }
