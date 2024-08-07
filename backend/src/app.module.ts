import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FileController } from './file/file.controller';
import { UsersModule } from './users/users.module';
import { FileModule } from './file/file.module';
import { FileService } from './file/file.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, FileModule],
  controllers: [FileController],
  providers: [FileService, PrismaService],
})
export class AppModule { }
