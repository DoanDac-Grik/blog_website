const express =require('express');
const router = express.Router();
const authController = require('../controller/AuthController');
const auth = require('../middleware/authMiddleware');

router.get('/login',authController.login);
router.get('/addAcc', auth.isAdmin, authController.addAcc);
router.post('/createUser',auth.isAdmin, authController.creatUser);
router.post('/userlogin',authController.userlogin);
router.get('/logout',authController.userlogout);
module.exports = router;