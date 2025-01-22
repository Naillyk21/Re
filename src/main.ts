import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes();

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`✅ Serveur NestJS démarré sur http://localhost:${PORT}`);
}

bootstrap();