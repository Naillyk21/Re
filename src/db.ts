import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Utilisateur } from './entities/Utilisateur';
import { Hospital } from './entities/Hospital';

dotenv.config(); // Charge les variables d'environnement depuis .env

// Configuration de la connexion à la base de données
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false, // Désactive les logs inutiles
  entities: [Utilisateur, Hospital],
  ssl: {
    rejectUnauthorized: false,
  },
});

// Ajout d'une fonction explicite pour initialiser la connexion
export async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('✅ Connecté à la base de données PostgreSQL');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données :', error);
    process.exit(1); // Quitte le processus en cas d'échec
  }
}