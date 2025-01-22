"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
// Tes modules métiers
const users_module_1 = require("./users/users.module");
const hospitals_module_1 = require("./hospitals/hospitals.module");
// Ton middleware de logs
const logger_middleware_1 = require("./middleware/logger.middleware");
let AppModule = class AppModule {
    constructor() {
        // Optionnel : logguer la config DB (sauf le mot de passe en clair)
        common_1.Logger.log(`AppModule chargé.`, 'AppModule');
        common_1.Logger.log(`DB_HOST: ${process.env.DB_HOST}`, 'AppModule');
        common_1.Logger.log(`DB_PORT: ${process.env.DB_PORT}`, 'AppModule');
        common_1.Logger.log(`DB_USER: ${process.env.DB_USER}`, 'AppModule');
        common_1.Logger.log(`DB_NAME: ${process.env.DB_NAME}`, 'AppModule');
        // Logger.log(`DB_PASS: ${process.env.DB_PASSWORD}`, 'AppModule'); // À éviter en clair
    }
    // Conserve ton LoggerMiddleware
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // -- Configuration de la connexion TypeORM --
            typeorm_1.TypeOrmModule.forRoot({
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
            users_module_1.UsersModule,
            hospitals_module_1.HospitalsModule,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
