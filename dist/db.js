"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.initializeDatabase = initializeDatabase;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const Utilisateur_1 = require("./entities/Utilisateur");
const Hospital_1 = require("./entities/Hospital");
dotenv_1.default.config(); // Charge les variables d'environnement depuis .env
// Configuration de la connexion à la base de données
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false, // Désactive les logs inutiles
    entities: [Utilisateur_1.Utilisateur, Hospital_1.Hospital],
    ssl: {
        rejectUnauthorized: false,
    },
});
// Ajout d'une fonction explicite pour initialiser la connexion
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.AppDataSource.initialize();
            console.log('✅ Connecté à la base de données PostgreSQL');
        }
        catch (error) {
            console.error('❌ Erreur de connexion à la base de données :', error);
            process.exit(1); // Quitte le processus en cas d'échec
        }
    });
}
