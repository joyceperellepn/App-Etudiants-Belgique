"L'application est un guide interactif. L'étudiant entre sa nationalité, sa ville en Belgique, et l'application lui génère une feuille de route : 1. S'inscrire à la commune (avec les documents requis), 2. Ouvrir un compte bancaire, 3. S'inscrire à une mutuelle."



# App-Etudiants-Belgique
Application d'aide aux démarches administratives pour étudiants étrangers en Belgique."
# Projet : Guide Administratif pour Étudiants Étrangers en Belgique
**Objectif :** Application type "Google Maps" pour orienter les étudiants dans leurs démarches (Visa, Communes, Mutuelles, Logement).

## 🗺️ Maillage avec les Compétences RNCP (Référentiel)

### BLOC 1 : Développer une application sécurisée
* **CP 1 (Environnement) :** Configuration Docker/Node.js/React pour le projet.
* **CP 2 (UI) :** Interfaces responsives (React/Vue) pour la recherche de lieux administratifs.
* **CP 3 (Métier) :** Logique de calcul des délais administratifs et check-lists personnalisées.
* **CP 4 (Gestion de projet) :** Utilisation de GitHub Project (Kanban) pour le suivi des tâches.

### BLOC 2 : Concevoir et développer une application organisée en couches
* **CP 5 (Besoins/Maquette) :** Dossier `/docs` incluant les wireframes Figma.
* **CP 6 (Architecture) :** API REST séparée du Front-end (Architecture Client-Serveur).
* **CP 7 (Base de données) :** Modèle relationnel (PostgreSQL) pour les adresses et horaires des administrations.
* **CP 8 (Accès données) :** Utilisation d'un ORM (Prisma ou Sequelize) pour les requêtes SQL/NoSQL.

### BLOC 3 : Préparer le déploiement
* **CP 9 (Tests) :** Tests unitaires (Jest) sur les formulaires d'inscription.
* **CP 10 (Déploiement) :** Documentation du déploiement sur Vercel ou Heroku.
* **CP 11 (DevOps) :** Mise en place d'un workflow GitHub Actions (CI/CD).

## 🎯 Fonctionnalités principales
* **Carte Interactive :** Visualisation des administrations (Communes, Ambassades) via l'API Google Maps/Leaflet.
* **Système de Filtres :** Recherche par type de démarche (Visa, Logement, Mutuelle).
* **Espace Utilisateur Sécurisé :** Stockage des documents nécessaires et suivi des dossiers (Compétence 3).
* **Architecture :** Développement basé sur une séparation claire entre le Front-end et le Back-end (Compétence 6).
