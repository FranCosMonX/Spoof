import { Module } from '@nestjs/common';
import { FileModule } from 'src/file/file.module';
import { PostsController } from './posts.controller';

@Module({
  imports: [FileModule],
  controllers: [PostsController]
})
export class PostsModule { }
