const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/infoUsers/:id', auth, userCtrl.infoUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', auth, multer, userCtrl.modifyUser)

//Pour TEST
router.get('/getUsers', userCtrl.getUsers);

module.exports = router;