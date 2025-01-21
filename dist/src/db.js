"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'adminadmin',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
});
// Test de connexion à la base
pool.connect()
    .then(() => console.log('✅ Connecté à la base de données PostgreSQL'))
    .catch((err) => {
    console.error('❌ Erreur de connexion à la base de données :', err.message);
    process.exit(1); // Quitte le serveur en cas d'échec
});
exports.default = pool;
