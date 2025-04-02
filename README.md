
# SportSee - Tableau de bord d'analyse sportive  

SportSee est une application web permettant de suivre et analyser les données sportives des utilisateurs. Elle offre des graphiques et des statistiques basés sur les activités quotidiennes de l'utilisateur, telles que les calories brûlées, les séances d'entraînement, et plus encore.  

## Table des matières  
1. [Installation](#installation)  
2. [Utilisation](#utilisation)  
3. [Technologies](#technologies)  

## Installation  

### Prérequis  

- Node.js, Yarn et npm installés.  

### Lancement 

- cd SportSee-font
- cd app
- npm run dev

## Utilisation  

Actuellement, les données de deux utilisateurs sont présentes dans la base de données.  

Une fois sur la page "Profil", les URL sont :  

- `/Profil/12`  
- `/Profil/18`  

Pour les besoins du développement, les données ont été mockées dans un fichier local.  
Pour accéder à ces données plutôt qu'à celles de l'API, il faut :  

- Commenter cette ligne de code :  
  ```js
  import { fetchUserMainData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../services/api";
  ```
- Puis retirer le commentaire sur celle-ci :  
  ```js
  // import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from "../data/apiMock";
  ```

## Technologies  

| Technologie | Description |
|-------------|-------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Bibliothèque JavaScript pour la création d'interfaces utilisateur |
| ![Recharts](https://img.shields.io/badge/Recharts-0081CB?style=for-the-badge&logo=recharts&logoColor=white) | Librairie de graphiques pour React |
| ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) | Préprocesseur CSS pour des styles plus avancés |
| ![PropTypes](https://img.shields.io/badge/PropTypes-FF4154?style=for-the-badge) | Système de validation des props pour React |
