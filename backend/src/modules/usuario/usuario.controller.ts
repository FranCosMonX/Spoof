import { Body, Controller, Post } from '@nestjs/common';
import { usuarioDTO } from '../dto/usuario';
import { ModulesService } from './usuario.service';

@Controller('usuarios')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) { }

  @Post()
  async create(@Body() data: usuarioDTO) {
    return this.modulesService.create(data)
  }
}
