const http = require('http'); // Import du package http natif de Node pour créer un serveur
const app = require('./app'); // Import de l'appli (fonctions middleware)
const db = require('./models');


const normalizePort = val => { // Normalisation de Port : Renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const PORT = normalizePort(process.env.PORT || '8000');
app.set('port', PORT); // set de l'appli sur un port

// Connection à la base de donnée mySql avec Sequelize
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on port : ' + PORT)
    })
})


