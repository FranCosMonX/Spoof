# Backend

Componente da aplicação Spoof responsável por receber requisiçõess do cliente, processá-las e retornar uma resposta satisfatória que deverá ser tratada seguindo a documentação.

O backend foi desenvolvido por meio de um projeto **React com nestJS + Prisma** e usando o **gerenciador de pacotes pnpm**, uma versão melhorada do npm do NodeJS.

## Projeto NestJS

O NestJS é um framework progressivo para Node.js que ajuda a construir aplicações server-side eficientes e escaláveis. Ele utiliza TypeScript por padrão e é inspirado em conceitos de programação orientada a objetos, funcional e reativa.

### Vantagens do NestJS

- **Modularidade**: Facilita a organização do código em módulos, tornando a aplicação mais fácil de manter e escalar.
- **Injeção de Dependência**: Oferece um sistema robusto de injeção de dependência, facilitando a gestão de dependências e a escrita de testes.
- **Suporte a Diversos Protocolos**: Suporta HTTP, WebSockets, GraphQL, e muito mais.

## Integração com Prisma

O Prisma é um ORM (Object-Relational Mapping) moderno e eficiente para Node.js e TypeScript. Ele facilita o trabalho com bancos de dados, oferecendo uma camada de acesso a dados segura e tipada.

### Vantagens do Prisma

- **Type-Safety**: Garante segurança de tipos, reduzindo erros em tempo de execução.
- **Migrations**: Facilita a criação e aplicação de migrações de banco de dados.
- **Query Builder**: Oferece uma API intuitiva para construir consultas SQL.

## Preparando o ambiente de execução

instalando as dependências do projeto

```bash
pnpm i
```

É de extrema importância que seja criado um arquivo `.env` na raiz do projeto e que seja copiado o código do arquivo `.env-example` para que o próximo passo possa vir a ser executado com êxito.

Para concluir a configuração do projeto backend, use os comandos a seguir

```bash
# Aplica as migrações pendentes ao banco de dados
npx prisma migrate

# Gera o cliente Prisma a partir do esquema definido
npx prisma generate
```

## Executando a aplicação

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

