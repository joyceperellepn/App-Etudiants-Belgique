const express = require('express');
const cors = require('cors'); // Permet au frontend de parler au backend
const app = express();
const PORT = 3000;

app.use(cors());

// Données de simulation (ton "cerveau" administratif)
const baseDonneesDemarches = {
    "non-ue": [
        "Demande de Visa D (Ambassade)",
        "Inscription à la commune (Arrivée)",
        "Inscription définitive à l'Université",
        "Affiliation à une Mutuelle belge"
    ],
    "ue": [
        "Demande d'Annexe 8 (Commune)",
        "Validation de la Carte Européenne Assurance Maladie (CEAM)",
        "Recherche de logement (Kot)",
        "Ouverture d'un compte bancaire belge"
    ]
};

// ROUTE API (CP 6)
app.get('/demarches/:profil', (req, res) => {
    const profil = req.params.profil;
    const liste = baseDonneesDemarches[profil];

    if (liste) {
        res.json({ success: true, demarches: liste });
    } else {
        res.status(404).json({ success: false, message: "Profil non trouvé" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});