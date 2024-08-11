import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ObjetoService } from './objeto.service';
import { ObjetoController } from './objeto.controller';

@Module({
  providers: [ObjetoService, PrismaService],
  controllers: [ObjetoController],
  exports: [ObjetoService],
})
export class ObjetoModule {}
