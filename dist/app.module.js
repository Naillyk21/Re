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
const hospitals_module_1 = require("./hospitals/hospitals.module");
const users_module_1 = require("./users/users.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
// Import de notre module de BDD
const database_module_1 = require("./entities/database.module");
let AppModule = class AppModule {
    constructor() {
        common_1.Logger.log('AppModule chargé.', 'AppModule');
    }
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
            // Notre module qui configure TypeORM
            database_module_1.DatabaseModule,
            // Modules métiers
            hospitals_module_1.HospitalsModule,
            users_module_1.UsersModule,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
