import { Controller } from '@nestjs/common';
import { ModulesService } from './usuario.service';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) { }
}
