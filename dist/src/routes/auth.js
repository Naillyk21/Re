require('dotenv').config();
const express = require('express');
const querystring = require('querystring');
const router = express.Router();
// Configuration PSC
const PSC_AUTH_URL = process.env.PSC_AUTH_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
// Route pour afficher la page d'authentification PSC
router.get('/login', (req, res) => {
    const authUrl = `${PSC_AUTH_URL}?${querystring.stringify({
        response_type: 'code', // Type de réponse attendu : un code d'autorisation
        client_id: CLIENT_ID, // Identifiant de l'application
        redirect_uri: REDIRECT_URI, // URL où PSC redirigera après authentification
        scope: 'openid', // Demande minimale pour une authentification
    })}`;
    // Redirige l'utilisateur vers la page d'authentification PSC
    res.redirect(authUrl);
});
// Callback après authentification
router.get('/callback', (req, res) => {
    const { code } = req.query;
    if (!code) {
        return res.status(400).send('Code d\'autorisation manquant');
    }
    // Affiche le code reçu après l'authentification
    res.send(`
        <h1>Connexion réussie !</h1>
        <p>Code d'autorisation : ${code}</p>
    `);
});
module.exports = router;
