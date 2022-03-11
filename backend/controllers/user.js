const db = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.signup = async (req, res) => {
    try {
        const userVerify = await db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        if (userVerify.length > 0) {
            return res.status(401).json({error: "Utilisateur déjà inscrit"})   
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user =  await db.User.create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: hashPassword,
            imageUrl: req.body.imageUrl
        });
        res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id},
                'CHAINE_SECRETE_DE_DEVELOPPEMENT_TEMPORAIRE',
                { expiresIn: '24h'}
            )
        });
    }
    catch (err) {
        res.status(500).json( { err })
    }
};

exports.login = async (req, res) => {
    const userVerify = await db.User.findAll({
        where: {
            email: req.body.email
        }
    });
    try {
        if (userVerify.length === 0) {
            return res.status(401).json({error: "Utilisateur non trouvé !"})
        }
        const user = userVerify[0].dataValues;
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) throw {status: 401, msg: "Mot de passe incorrect !"};
        res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id},
                'CHAINE_SECRETE_DE_DEVELOPPEMENT_TEMPORAIRE',
                { expiresIn: '24h'}
            )
        });
    }
    catch (err) {
        res.status(500).json({ err })
    }
};

exports.infoUser = async (req, res) => {
    try {

        const userId = await db.User.findAll({
            where: {
                id: req.params.id
            }
        });
        const countArticle = await db.Article.count({
            where: {
                UserId: req.params.id
            }
        })
        const user = userId[0]
        res.status(200).json({
            nickname: user.nickname,
            email: user.email,
            id: user.id,
            createdAt: user.createdAt,
            imageUrl: user.imageUrl,
            nbArticle: countArticle,
            isAdmin: user.isAdmin
        });
    }
    catch (err) {
        res.status(500).json({ err });
        return;
    }
};

const removeImage = (user) => {
    const imageName = user[0].dataValues.imageUrl.split('/images/')[1];
    imageName !== 'userImage.png' && fs.readdir(__dirname+'/../images', (err, files) => {
        files.includes(imageName) ? fs.unlink(__dirname+'/../images/' + imageName, () => console.log("image supprimée !")) : console.log('Aucune image trouvée !')
    })
}

exports.deleteUser = async (req, res) => {
    try {
        const userToRemove = await db.User.findAll({
            where: {
                id: req.params.id
            }
        });
        removeImage(userToRemove);
        const user = await db.User.destroy({
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({message: "utilisateur supprimé"})
    }
    catch (err) {
        res.status(500).json({ err });
    }
}

exports.modifyUser = async (req, res) => {
    try{
        const userImgReplace = await db.User.findAll({
            where: {
                id: req.params.id
            }
        });
        const imageName = userImgReplace[0].dataValues.imageUrl.split('/images/')[1];
        imageName !== 'userImage.png' && removeImage(userImgReplace);
        const user = await db.User.update({
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Image de profil modifiée !"})
    }
    catch (err) {
        res.status(500).json({ err });
    }
    
}

// Pour TEST
exports.getUsers = async (req, res) => {
    const users = await db.User.findAll({attributes: ['id', 'nickname', 'email', 'imageUrl', 'createdAt']});
    console.log(users);
    res.status(200).json(users);
};