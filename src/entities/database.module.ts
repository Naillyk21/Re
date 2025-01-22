import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // forRootAsync nous permet de faire un traitement asynchrone
    // et de logger / manipuler les variables d'environnement comme on veut
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        // Récupérer et caster les variables d'environnement
        const host = process.env.DB_HOST || 'localhost';
        const port = parseInt(process.env.DB_PORT || '5432', 10);
        const username = process.env.DB_USER || 'postgres';
        const password = process.env.DB_PASSWORD || '';
        const database = process.env.DB_NAME || 'testdb';

        // Log des infos de connexion (sans le password complet si tu veux éviter)
        Logger.log('TypeORM - Connexion à la DB :', 'DatabaseModule');
        Logger.log(`  Host     : ${host}`, 'DatabaseModule');
        Logger.log(`  Port     : ${port}`, 'DatabaseModule');
        Logger.log(`  Username : ${username}`, 'DatabaseModule');
        Logger.log(`  Database : ${database}`, 'DatabaseModule');
        // Pour le password, on logge éventuellement juste un bout
        // Logger.log(`  Password : ${password.slice(0,2)}******`, 'DatabaseModule');

        return {
          type: 'postgres' as const,
          host,
          port,
          username,
          password,
          database,
          // Tu peux laisser autoLoadEntities si tu veux charger toutes les entités
          // présentes dans les @Module(... TypeOrmModule.forFeature([...]))
          autoLoadEntities: true,
          synchronize: false,    // ou true en dev
          logging: true,
          // ssl: true ou ssl: { rejectUnauthorized: false }, selon ton cas
          ssl: true, 
        };
      },
    }),
  ],
})
export class DatabaseModule {}