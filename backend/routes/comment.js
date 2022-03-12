const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/:id', auth, commentCtrl.getComments);
router.post('/',auth, commentCtrl.createComment);
router.put('/:id',auth, commentCtrl.updateComment);
router.delete('/:id',auth, commentCtrl.destroyComment);

module.exports = router;