const db = require('../models');

exports.getComments = async (req, res) => {
    try {
        const comments = await db.Comment.findAll({
            where : {
                Articleid : req.params.id
            }
        });
        if (comments.length === 0 || comments === null) {
            return res.status(200).json({message: 'Aucun commentaire'})
        } else {
            return res.status(200).json(comments);
        }
    }
    catch (error) {
        res.status(500).json({ error });
        return;
    }
}

exports.createComment = async (req, res) => {
    try {
        const comment = await db.Comment.create({
            message: req.body.message,
            ArticleId: req.body.ArticleId,
            UserId: req.body.UserId
        });
        res.status(200).json({message: "Vous avez commenter l'article !"})
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = db.Comment.update({
            message: req.body.message,
            article_id: req.body.article_id,
            UserId: req.body.UserId
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Commentaire modifié !"})
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.destroyComment = async (req, res) => {
    try {
        const comment = await db.Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Commentaire supprimé !"});
    }
    catch (error) {
        res.status(500).json({ error });
    }
};