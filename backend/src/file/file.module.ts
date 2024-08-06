import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';

//https://docs.nestjs.com/techniques/file-upload
@Module({
  providers: [FileService],
  controllers: [FileController]
})
export class FileModule { }
