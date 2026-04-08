LIVRABLE TECHNIQUE : APP ÉTUDIANTS BELGIQUE
1. Choix des Technologies (Benchmark)
    Explication des outils que je vais utiliser pour construire l'application.

-Frontend : React.js
Je l'ai utilisé car c'est l'une des  bibliothèques les plus utilisées actuellement. Elle permet de créer une interface très fluide (Application a page unique ) où l'utilisateur n'a pas besoin de recharger la page pour voir les changements , pour toute fois offrir une experience fluide et moderne aux etudiants , sans temps d'attente entre les pages . ceci rend aussi l'application reactive .

Avantage : Pour une application étudiante, cela permet une navigation rapide entre la recherche de logements (Kots) et le forum.

-Backend : Node.js avec Express
 Je l'ai utilisé car cela permet d'utiliser le JavaScript aussi bien côté client que côté serveur. C'est extrêmement rapide pour gérer beaucoup de connexions simultanées.

Avantage : Idéal pour une application qui devra gérer des notifications en temps réel ou des chats entre étudiants.

Base de données : PostgreSQL
je l'ai utilisé car contrairement aux bases de données "simples", PostgreSQL est un système relationnel très robuste(strict).

Avantage : Essentiel pour lier de manière sécurisée un Étudiant à une Annonce de logement ou à une mutuelle.

2. Préparation du Plan de Sécurité
Ce plan détaillé comment nous protégeons les données personnelles des étudiants belges.

Chiffrement des mots de passe : Nous n'enregistrons jamais les mots de passe en "clair". Nous utilisons l'algorithme bcrypt pour transformer le mot de passe en une clé illisible, rendant le vol de données inutile pour un pirate.

Protection des échanges (HTTPS) : Toutes les communications entre le téléphone de l'étudiant et notre serveur seront1  .

Sécurisation des API : Nous utilisons des Tokens JWT. Une fois connecté, l'étudiant reçoit un jeton unique qui prouve son identité à chaque action, évitant que quelqu'un d'autre ne puisse se faire passer pour lui.

RGPD : Les données étant stockées en Belgique/Europe, nous respecterons le droit à l'effacement et à la portabilité des données.

3. Politique de Sauvegarde (Backup)
Comment nous évitons de perdre les données en cas de panne serveur.

Fréquence : Une sauvegarde automatique complète de la base de données est effectuée chaque nuit à 3h00.

Rétention : Nous gardons les copies des 30 derniers jours. Si un bug corrompt la base, nous pouvons revenir en arrière à n'importe quel jour du mois.

Externalisation : Une copie des sauvegardes est envoyée sur un serveur cloud différent du serveur principal (Cloud Storage) pour parer à un incendie ou une panne majeure du centre de données.


4. Roadmap Prévisionnelle
Ce planning détaille les étapes de développement pour livrer l'application complète d'ici la fin de l'année académique.

Avril (Phase de Lancement) :

Mise en place de l'architecture (Frontend & Backend).

Création de la base de données PostgreSQL.

Système d'inscription et de connexion sécurisé (Authentification).

Mai (Cœur de l'application) :

Module Logement : Développement du système d'annonces pour les Kots (ajout, recherche, filtres par ville).

Module Entraide : Création de l'espace de partage de documents et du forum étudiant.

Interface Utilisateur : Finalisation du design (UI/UX) pour une navigation fluide sur mobile et desktop.

Juin (Finalisation et Livraison) :

Tests : Phase intensive de tests pour corriger les bugs et vérifier la sécurité.

Déploiement : Mise en ligne de l'application sur un serveur de production.

Présentation : Préparation de la démonstration finale du produit.
