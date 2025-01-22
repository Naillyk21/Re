"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// app.module.ts
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
const hospitals_module_1 = require("./hospitals/hospitals.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
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
            users_module_1.UsersModule,
            hospitals_module_1.HospitalsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '5432', 10),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + '/entities/*.ts'], // Inclure toutes les entités nécessaires
                synchronize: false, // Synchronisation activée pour développement
                logging: true, // Active les logs SQL
                ssl: {
                    rejectUnauthorized: false, // Utilisé pour des connexions SSL sans vérification stricte
                },
            }),
        ],
    })
], AppModule);
