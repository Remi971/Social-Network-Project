# Groupomania
Création d'un réseau social d'entreprise GROUPOMANIA - Projet 7 Openclassrooms

Application développée avec React.js et Node.js.

* Pour lancer l'application, il est nécessaire d'installer MySql.

* Une fois installée créez une base de données intitulée 'groupomania' avec la requête suivante : 
`CREATE DATABASE groupomania;`

* Dans le dossier backend, il faut créer un fichier 'config.json' dans un dossier nommé 'config' contenant les informations de connexion de votre base de données mySql :
`{
  "development": {
    "username": "VotreUsername",
    "password": "VotreMotDePasse",
    "database": "groupomania",
    "host": "127.0.0.1",
    "dialect": "mysql"
   },
}`

## Frontend
`npm install` // Pour installer toutes les dépendances
`npm start` // Pour lancer le serveur frontend

## Backend
`npm install` // Pour installer toutes les dépendances
`npm run dev` // Pour lancer le serveur backend

Une fois dans l'application, vous pouvez créer un utilisateur et à partir de MySql Workbench vous pouvez donner à cette utilisateur les droits admin avec la requête suivante :
`USE groupomania;
UPDATE users SET isAdmin = 1 WHERE nickname='nom de l'utilisateur créé`;

Les droits admin permettent de modifier et supprimer tous les post et commentaires des autres utilisateurs et permet aussi de supprimer les utilisateurs.
