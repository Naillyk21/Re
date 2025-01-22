import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    Logger.log(`Application lancée sur le port 3000`, 'Bootstrap');
  });
}
bootstrap();