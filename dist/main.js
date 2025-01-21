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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        // Middleware global pour parser les requêtes JSON
        app.useGlobalPipes();
        // Récupérer et afficher les endpoints exposés
        const httpAdapter = app.getHttpAdapter();
        const server = httpAdapter.getInstance();
        if (httpAdapter.constructor.name === 'ExpressAdapter') {
            const router = server._router;
            const routes = router.stack
                .filter((layer) => layer.route)
                .map((layer) => ({
                method: Object.keys(layer.route.methods)[0].toUpperCase(),
                path: layer.route.path,
            }));
            common_1.Logger.log('Endpoints exposés :');
            console.table(routes);
        }
        else {
            common_1.Logger.warn('Affichage des routes non pris en charge pour cet adaptateur HTTP.');
        }
        // Démarrage de l'application
        const PORT = process.env.PORT || 3000;
        yield app.listen(PORT);
        console.log(`✅ Serveur NestJS démarré sur http://localhost:${PORT}`);
    });
}
bootstrap();
