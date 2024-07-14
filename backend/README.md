# Backend

## Preparando o ambiente de execução

instalando as dependências do projeto

```bash
$ pnpm i
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

