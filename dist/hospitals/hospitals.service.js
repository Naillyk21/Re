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
exports.HospitalsService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const Hospital_1 = require("../entities/Hospital");
let HospitalsService = class HospitalsService {
    createHospital(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Vérification si l'entité est correctement enregistrée
                const hospitalRepository = db_1.AppDataSource.getRepository(Hospital_1.Hospital);
                console.log('Entité Hospital accessible :', hospitalRepository.metadata);
                // Création d'un nouvel hôpital
                const hospital = hospitalRepository.create(data);
                console.log('Données pour la création de l\'hôpital :', data);
                // Sauvegarde dans la base de données
                const savedHospital = yield hospitalRepository.save(hospital);
                console.log('Hôpital sauvegardé avec succès :', savedHospital);
                return savedHospital;
            }
            catch (error) {
                // Vérification et typage explicite de l'erreur
                if (error instanceof Error) {
                    console.error('Erreur lors de l\'ajout de l\'hôpital :', error.message);
                    console.error('Stack trace :', error.stack);
                }
                else {
                    console.error('Erreur inconnue lors de l\'ajout de l\'hôpital :', error);
                }
                throw new Error('Erreur interne du serveur');
            }
        });
    }
};
exports.HospitalsService = HospitalsService;
exports.HospitalsService = HospitalsService = __decorate([
    (0, common_1.Injectable)()
], HospitalsService);
