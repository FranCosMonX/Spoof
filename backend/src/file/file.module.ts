import { Module } from '@nestjs/common';
import { FileService } from './file.service';

//https://docs.nestjs.com/techniques/file-upload
@Module({
  providers: [FileService],
  exports: [FileService]
})
export class FileModule { }
