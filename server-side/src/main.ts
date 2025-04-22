import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: [process.env.CLIENT_URL], //URL пользователя
    credentials: true, //говорим о том, что работаем с серверными куками
    exposedHeaders: 'set-cookie'
  });

  await app.listen(5000);
}
void bootstrap();
