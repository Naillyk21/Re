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
const express_1 = require("express");
const db_1 = __importDefault(require("../db")); // Connexion à la base de données
const router = (0, express_1.Router)();
// Ajouter un utilisateur
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, idrole } = req.body;
    if (!email || !password || !idrole) {
        return res.status(400).json({ error: 'Tous les champs (email, password, idrole) sont obligatoires.' });
    }
    try {
        const query = `
      INSERT INTO Utilisateur (email, password, idrole)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
        const values = [email, password, idrole];
        const result = yield db_1.default.query(query, values);
        return res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur.' });
    }
}));
// Récupérer tous les utilisateurs
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'SELECT * FROM Utilisateur';
        const result = yield db_1.default.query(query);
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
    }
}));
exports.default = router;
