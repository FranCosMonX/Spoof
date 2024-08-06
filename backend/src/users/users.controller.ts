import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common';
import { Request } from 'express';
import { Public } from 'src/routes/routes.decorator';
import { BasicInformationDTO, SensitiveInformationDTO } from './dto/UpdateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req) {
    return this.usersService.getMyUser(params.id, req)
  }

  @Patch(':id/update')
  update(@Param() param: { id: string }, @Req() req: Request, @Body() dto: SensitiveInformationDTO | BasicInformationDTO) {
    const token = req.headers.authorization.replace("Bearer ", "")
    console.log(param)
    return this.usersService.update(param.id, dto)
  }

  @Public()
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
