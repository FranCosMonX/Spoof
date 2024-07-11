// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { usuarioDTO } from '../dto/usuario';
// import { UsuarioService } from './usuario.service';

// @Controller('usuarios')
// export class UsuarioController {
//   constructor(private readonly usuarioService: UsuarioService) { }

//   @Post()
//   async create(@Body() data: usuarioDTO) {
//     return this.usuarioService.create(data)
//   }

//   @Get(":usuario")
//   async find(@Param("usuario") usuario) {
//     return this.usuarioService.find(usuario)
//   }
// }
