const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const articleCtrl = require('../controllers/article');

router.get('/', auth, articleCtrl.getAllArticles);
router.get('/:id', auth, articleCtrl.getOneArticle);
router.post('/', auth, multer, articleCtrl.createArticle);
router.put('/:id', auth, multer, articleCtrl.updateArticle);
router.delete('/:id', auth, articleCtrl.destroyArticle);

module.exports = router;