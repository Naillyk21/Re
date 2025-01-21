"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = sayHello;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routes/users")); // Import des routes utilisateur
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// src/index.ts
console.log("Le serveur TypeScript est lancé !");
// Middleware pour analyser les corps des requêtes JSON
app.use(body_parser_1.default.json());
// Utiliser la route pour les utilisateurs
app.use('/api', users_1.default);
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
// Exemple simple : une fonction pour dire bonjour
function sayHello(name) {
    return `Bonjour, ${name}!`;
}
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
app.get('/test', (req, res) => {
    res.send('Le serveur fonctionne correctement !');
});
console.log(sayHello("Utilisateur"));
