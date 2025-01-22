import 'reflect-metadata';
import 'dotenv/config';  // <-- Ajout pour charger .env
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000, () => {
      Logger.log('server is running on port 3000');
    });
  } catch (error) {
    Logger.error(error);
  }
}
bootstrap();