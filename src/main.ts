import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { initializeDatabase } from './db'; // Import de la fonction explicite

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware global pour parser les requêtes JSON
  app.useGlobalPipes();

  // Log des endpoints exposés
  const server = app.getHttpAdapter();
  const availableRoutes = server
    .getInstance()
    ._router.stack.filter((layer: any) => layer.route)
    .map((layer: any) => ({
      method: Object.keys(layer.route.methods)[0].toUpperCase(),
      path: layer.route.path,
    }));

  Logger.log('Endpoints exposés :');
  console.table(availableRoutes);

  // Démarrage de l'application
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`✅ Serveur NestJS démarré sur http://localhost:${PORT}`);

  // Initialisation de la base de données
  await initializeDatabase();
}

bootstrap();