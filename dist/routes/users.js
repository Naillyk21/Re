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
const express_1 = require("express");
const db_1 = require("../db");
const Utilisateur_1 = require("../entities/Utilisateur");
const router = (0, express_1.Router)();
// Route pour ajouter un utilisateur
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, idrole } = req.body;
    // Validation des données reçues
    if (!email || !password || typeof idrole !== 'number') {
        return res.status(400).json({ error: 'Tous les champs (email, password, idrole) sont obligatoires.' });
    }
    try {
        // Création d'un nouvel utilisateur
        const utilisateur = new Utilisateur_1.Utilisateur();
        utilisateur.email = email;
        utilisateur.password = password;
        utilisateur.idrole = idrole;
        // Enregistrement dans la base de données
        const userRepository = db_1.AppDataSource.getRepository(Utilisateur_1.Utilisateur);
        const savedUser = yield userRepository.save(utilisateur);
        return res.status(201).json({ message: 'Utilisateur ajouté avec succès.', utilisateur: savedUser });
    }
    catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        return res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
}));
exports.default = router;
