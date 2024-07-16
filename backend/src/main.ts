import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })

  app.use((req, res, next) => {
    res.cookie('cookieName', 'cookieValue', {
      httpOnly: true, // O cookie não pode ser acessado via JavaScript
      secure: true, // para poder acessar os coockies com http
      sameSite: 'strict' // Protege contra ataques CSRF
    });
    next();
  });

  await app.listen(3001);
}
bootstrap();
