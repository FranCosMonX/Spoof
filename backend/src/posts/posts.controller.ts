import { BadRequestException, Controller, Delete, HttpCode, HttpStatus, Param, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname as getExtname } from 'path';
import { FileService } from 'src/file/file.service';
import { Public } from 'src/routes/routes.decorator';

@Controller('posts')
export class PostsController {
  constructor(private filesService: FileService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(':userId/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${getExtname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      const videoTypes = /mp4|mpg|avi|wmv/;
      const audioTypes = /mp3|wav|pcm|flac/;
      const imageTypes = /jpeg|jpg|png|svg/;

      const fileExtname = getExtname(file.originalname).toLowerCase();
      const mimetype = file.mimetype.toLowerCase();

      const isVideo = videoTypes.test(fileExtname) || videoTypes.test(mimetype);
      const isAudio = audioTypes.test(fileExtname) || audioTypes.test(mimetype);
      const isImage = imageTypes.test(fileExtname) || imageTypes.test(mimetype);

      if (isVideo || isAudio || isImage) {
        return cb(null, true);
      }

      cb(new BadRequestException('Somente é permitido arquivos de vídeo, áudio e imagem.'), false);
    },
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Param('userId') userId: string, @Req() req) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo upado.');
    }

    const result = await this.filesService.uploadFile(file, userId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Arquivo enviado com sucesso',
      data: result,
    };
  }

  @Public()
  @Delete(':fileId')
  async deleteFile(@Param('fileId') fileId: string) {
    const deletedFile = await this.filesService.deleteFileById(fileId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Arquivo excluído com sucesso',
      data: deletedFile,
    };
  }

  // @Public()
  // @Get('/ids')
  // async getAllFileIds() {
  //   const ids = await this.filesService.getAllFileIds();
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'IDs dos arquivos recuperados com sucesso',
  //     data: ids,
  //   };
  // }
}
