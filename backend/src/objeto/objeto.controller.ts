import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { memoryStorage } from 'multer';
import { extname as getExtname } from 'path';
import { Public } from 'src/routes/routes.decorator';
import { ObjetoService } from './objeto.service';

@Controller('objeto')
export class ObjetoController {
  constructor(private objetoService: ObjetoService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post(':userId/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: memoryStorage(), // Altere para memoryStorage
    fileFilter: (req, file, cb) => {
      const videoTypes = /mp4|mpg|avi|wmv|mov|webm/;
      const audioTypes = /mp3|wav|pcm|flac|ogg/;
      const imageTypes = /jpeg|jpg|png|svg|gif|webp/;

      const fileExtname = getExtname(file.originalname).toLowerCase();
      const mimetype = file.mimetype.toLowerCase();

      const isVideo = videoTypes.test(fileExtname) || videoTypes.test(mimetype);
      const isAudio = audioTypes.test(fileExtname) || audioTypes.test(mimetype);
      const isImage = imageTypes.test(fileExtname) || imageTypes.test(mimetype);

      if (isVideo || isAudio || isImage) {
        return cb(null, true);
      }

      cb(new BadRequestException('Tipo de arquivo não suportado.'), false);
    },
  }))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
    @Req() req) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    const { description, tags } = req.body;
    const result = await this.objetoService.uploadFile(file, userId, description, tags ? tags.split(',') : []);
    return {
      message: 'Arquivo enviado com sucesso',
      data: result,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':userId/:fileId')
  async deleteFile(
    @Param('userId') userId: string,
    @Param('fileId') fileId: string
  ) {
    // Verifica se o arquivo pode ser excluído
    const deletedFile = await this.objetoService.deleteFileById(userId, fileId);
    return {
      message: 'Arquivo excluído com sucesso',
      data: deletedFile,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':userId/search')
  async searchObjetos(
    @Param('userId') userId: string,
    @Query('keyword') keyword: string
  ) {
    if (!keyword) {
      throw new BadRequestException('Keyword é obrigatória');
    }

    const results = await this.objetoService.searchObjetos(userId, keyword);
    return {
      message: 'Resultados da pesquisa',
      data: results,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':userId/list')
  async listAllFiles(@Param('userId') userId: string) {
    const files = await this.objetoService.listAllFiles(userId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Arquivos recuperados com sucesso',
      data: files,
    };
  }

  @Patch(':userId/:fileId')
  async updateObjeto(
    @Param('userId') userId: string,
    @Param('fileId') fileId: string,
    @Body() updateData: { name?: string; description?: string; tags?: string[] }
  ) {
    const updatedObjeto = await this.objetoService.updateObjeto(userId, fileId, updateData);
    return {
      message: 'Objeto atualizado com sucesso',
      data: updatedObjeto,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get(':userId/:fileId/detalhes')
  async getObjetoDetails(
    @Param('userId') userId: string,
    @Param('fileId') fileId: string
  ) {
    const objetoDetails = await this.objetoService.getObjetoDetails(userId, fileId);
    return {
      message: 'Detalhes do objeto',
      data: objetoDetails,
    };
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Get(':fileId/upload')
  async getFile(
    @Param('fileId') fileId: string,
    @Res() res: Response
  ) {
    const result = await this.objetoService.getFile(fileId)
    res.set('Content-type', result.mime)
    return res.send(result.fileBuffer)
  }
}
