import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Delete, Req, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { Public } from 'src/routes/routes.decorator';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id/update/basicData')
  updateBasicInformation(@Param() param: { id: string }, @Body() dto: BasicInformationDTO) {
    return this.usersService.update(param.id, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id/update/sensitiveData')
  updateSensitiveInformation(@Param() param: { id: string }, @Body() dto: SensitiveInformationDTO) {
    return this.usersService.update(param.id, dto);
  }

  @Public()
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post(':id/upload-profile-picture')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/profile-pictures',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|svg/;
      const fileExtname = extname(file.originalname).toLowerCase();
      const extnameValid = allowedTypes.test(fileExtname);
      const mimetypeValid = allowedTypes.test(file.mimetype);
      if (mimetypeValid && extnameValid) {
        return cb(null, true);
      }
      cb(new BadRequestException('Only .png, .jpg, .jpeg, .svg formats are allowed!'), false);
    },
  }))
  async uploadProfilePicture(@UploadedFile() file: Express.Multer.File, @Param('id') userId: string) {
    await this.usersService.removePreviousProfilePicture(userId);
    const profilePictureUrl = `uploads/profile-pictures/${file.filename}`;
    const result = await this.usersService.updateProfilePicture(userId, profilePictureUrl);
    return {
      statusCode: HttpStatus.OK,
      message: 'Profile picture uploaded successfully',
      data: result,
    };
  }

  @Delete(':id/remove-profile-picture')
  @HttpCode(HttpStatus.OK)
  async removeProfilePicture(@Param('id') userId: string) {
    const result = await this.usersService.removePreviousProfilePicture(userId);
    return {
      statusCode: HttpStatus.OK,
      message: result.message,
    };
  }
}
