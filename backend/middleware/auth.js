const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers["authorization"] && req.headers["authorization"].split(' ')[1];
        const decodedToken = jwt.verify(token, 'CHAINE_SECRETE_DE_DEVELOPPEMENT_TEMPORAIRE');
        const userId = decodedToken.userId;
        req.auth = { userId };
        if(req.body.userId && req.body.userId !== userId) throw 'User ID non valide !';
        next();
    }
    catch (error) {
        res.status(403).json({ error: error | '403: unauthorized request !'})
    }
}