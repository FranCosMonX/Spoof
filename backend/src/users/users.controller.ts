import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Req } from '@nestjs/common';
import { Public } from 'src/routes/routes.decorator';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getMyUser(params.id, req)
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id/update/basicData')
  updateBasicInformation(@Param() param: { id: string }, @Body() dto: BasicInformationDTO) {
    return this.usersService.update(param.id, dto)
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id/update/sensitiveData')
  updateSensitiveInformation(@Param() param: { id: string }, @Body() dto: SensitiveInformationDTO) {
    return this.usersService.update(param.id, dto)
  }

  @Public()
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
