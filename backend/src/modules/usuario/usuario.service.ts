// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/database/PrismaService';
// import { usuarioDTO } from '../dto/usuario';

// @Injectable()
// export class UsuarioService {

//   constructor(private prisma: PrismaService) { }

//   async create(data: usuarioDTO) {
//     const usuarioExists = this.prisma.usuario.findFirst({
//       where: {
//         usuario: data.usuario
//       }
//     })

//     if (!usuarioExists) {
//       throw new Error("Usuário já existe")
//     }
//     const usuario = this.prisma.usuario.create({
//       data
//     })

//     return usuario
//   }

//   async find(usuario: string) {
//     const usuarioExiste = await this.prisma.usuario.findUnique({
//       where: {
//         usuario: usuario
//       }
//     })

//     if (!usuarioExiste) throw new Error("Não existe este usuário")

//     return usuarioExiste
//   }
// }
