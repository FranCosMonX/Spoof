import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
// import { FileModule } from './file/file.module';
// import { FileService } from './file/file.service';
// import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { ObjetoModule } from './objeto/objeto.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, ObjetoModule],
  providers: [PrismaService],
})
export class AppModule { }
