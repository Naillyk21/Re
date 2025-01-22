import { Module, Logger, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Tes modules métiers
import { UsersModule } from './users/users.module';
import { HospitalsModule } from './hospitals/hospitals.module';

// Ton middleware de logs
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    // -- Configuration de la connexion TypeORM --
    TypeOrmModule.forRoot({
      type: 'postgres',

      // Récupère et convertit les variables d'environnement
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    // -- Import des modules métiers --
    UsersModule,
    HospitalsModule,
  ],
})
export class AppModule {
  constructor() {
    // Optionnel : logguer la config DB (sauf le mot de passe en clair)
    Logger.log(`AppModule chargé.`, 'AppModule');
    Logger.log(`DB_HOST: ${process.env.DB_HOST}`, 'AppModule');
    Logger.log(`DB_PORT: ${process.env.DB_PORT}`, 'AppModule');
    Logger.log(`DB_USER: ${process.env.DB_USER}`, 'AppModule');
    Logger.log(`DB_NAME: ${process.env.DB_NAME}`, 'AppModule');
    // Logger.log(`DB_PASS: ${process.env.DB_PASSWORD}`, 'AppModule'); // À éviter en clair
  }

  // Conserve ton LoggerMiddleware
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}