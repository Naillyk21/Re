import { Module, MiddlewareConsumer, RequestMethod, Logger } from '@nestjs/common';
import { HospitalsModule } from './hospitals/hospitals.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
// Import de notre module de BDD
import { DatabaseModule } from './entities/database.module';

@Module({
  imports: [
    // Notre module qui configure TypeORM
    DatabaseModule,

    // Modules métiers
    HospitalsModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor() {
    Logger.log(
      'AppModule chargé.',
      'AppModule',
    );
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}