# Backend

## Preparando o ambiente de execução

instalando a última versão do prisma no projeto.

```bash
$ pnpm i --save-dev prisma@latest
```

Instalar a última versão do prisma client no projeto.

para instalar o prisma client
```bash
$ pnpm i @prisma/client@latest
```

É de extrema importância que seja criado um arquivo `.env` na raiz do projeto e que seja copiado o código do arquivo `.env-example` para que o próximo passo possa vir a ser executado com êxito.

Para concluir a configuração do projeto backend, use o comando a seguir

```bash
$ npx prisma generate
```

## Executando a aplicação

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
