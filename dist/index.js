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
exports.sayHello = sayHello;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("./db");
const db_1 = require("./db"); // Assurez-vous que la connexion à la base est initialisée
const Utilisateur_1 = require("./entities/Utilisateur");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// src/index.ts
console.log("Le serveur TypeScript est lancé !");
// Middleware pour analyser les corps des requêtes JSON
app.use(body_parser_1.default.json());
// Middleware pour logger les requêtes
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
// Route de test
app.get('/test', (req, res) => {
    res.send('Le serveur fonctionne correctement !');
});
// Route pour ajouter un utilisateur
app.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
// Exemple simple : une fonction pour dire bonjour
function sayHello(name) {
    return `Bonjour, ${name}!`;
}
console.log(sayHello("Utilisateur"));
