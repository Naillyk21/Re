"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // forRootAsync nous permet de faire un traitement asynchrone
            // et de logger / manipuler les variables d'environnement comme on veut
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
                    // Récupérer et caster les variables d'environnement
                    const host = process.env.DB_HOST || 'localhost';
                    const port = parseInt(process.env.DB_PORT || '5432', 10);
                    const username = process.env.DB_USER || 'postgres';
                    const password = process.env.DB_PASSWORD || '';
                    const database = process.env.DB_NAME || 'testdb';
                    // Log des infos de connexion (sans le password complet si tu veux éviter)
                    common_1.Logger.log('TypeORM - Connexion à la DB :', 'DatabaseModule');
                    common_1.Logger.log(`  Host     : ${host}`, 'DatabaseModule');
                    common_1.Logger.log(`  Port     : ${port}`, 'DatabaseModule');
                    common_1.Logger.log(`  Username : ${username}`, 'DatabaseModule');
                    common_1.Logger.log(`  Database : ${database}`, 'DatabaseModule');
                    // Pour le password, on logge éventuellement juste un bout
                    // Logger.log(`  Password : ${password.slice(0,2)}******`, 'DatabaseModule');
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username,
                        password,
                        database,
                        // Tu peux laisser autoLoadEntities si tu veux charger toutes les entités
                        // présentes dans les @Module(... TypeOrmModule.forFeature([...]))
                        autoLoadEntities: true,
                        synchronize: false, // ou true en dev
                        logging: true,
                        // ssl: true ou ssl: { rejectUnauthorized: false }, selon ton cas
                        ssl: true,
                    };
                }),
            }),
        ],
    })
], DatabaseModule);
