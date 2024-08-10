import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { FileService } from './file/file.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, FileModule, PostsModule],
  providers: [FileService, PrismaService],
})
export class AppModule { }
