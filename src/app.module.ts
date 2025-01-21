// app.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HospitalsModule } from './hospitals/hospitals.module';
import { Hospital } from './entities/Hospital';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './entities/Utilisateur';

@Module({
  imports: [
    UsersModule,
    HospitalsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Utilisateur, Hospital], // Inclure toutes les entités nécessaires
      synchronize: true, // Synchronisation activée pour développement
      logging: true, // Active les logs SQL
      ssl: {
        rejectUnauthorized: false, // Utilisé pour des connexions SSL sans vérification stricte
      },
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
