import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FileController } from './file/file.controller';
import { UsersModule } from './users/users.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, FileModule],
  controllers: [FileController],
  providers: [],
})
export class AppModule { }
