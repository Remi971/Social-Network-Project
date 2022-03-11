const db = require('../models');
const fs = require('fs');
const path = require('path');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await db.Article.findAll();
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.getOneArticle = async (req, res) => {
    try {
        const article = await db.Article.findAll({
            where: {
                id: req.params.id
            }
        });
        const countComment = await db.Comment.count({
            where: {
                ArticleId: req.params.id
            }
        })
        res.status(200).json({
            nbComment: countComment
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.createArticle = async (req, res) => {
    try {
        let url = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : ''
        const article = await db.Article.create({
            url: url,
            alttext: req.body.alttext,
            message: req.body.message,
            UserId : req.body.UserId
        })
        res.status(200).json({message: 'Article créé avec succès !', url: url})
    }
    catch (error) {
        res.status(500).json( { error });
    }
};

const removeImage = (article) => {
    const imageName = article[0].dataValues.url.split('/images/')[1];
    fs.readdir(__dirname+'/../images', (err, files) => {
        files.includes(imageName) && fs.unlink(__dirname+'/../images/' + imageName, () => console.log("image supprimée !"))
    })
}

exports.updateArticle = async (req, res) => {
    try {
        const articleToRemove = await db.Article.findAll({
            where : {
                id: req.params.id
            }
        })
        req.file && removeImage(articleToRemove);
        const url = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : articleToRemove[0].dataValues.url;
        const article = await db.Article.update({
            url: url,
            alttext: req.body.alttext,
            message: req.body.message,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Article modifié !"})
    }
    catch (error) {
        res.status(500).json( { error });
    }
};


exports.destroyArticle = async (req, res) => {
    try {
        const articleToRemove = await db.Article.findAll({
            where : {
                id: req.params.id
            }
        });
        const Comment = await db.Comment.destroy({
            where: {
                ArticleId: req.params.id
            }
        });
        removeImage(articleToRemove);
        const articleDestroy = await db.Article.destroy({
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Article supprimé"})
    }
    catch (error) {
        res.status(500).json( { error });
    }
}