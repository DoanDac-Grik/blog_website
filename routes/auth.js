const express =require('express');
const router = express.Router();
const authController = require('../controller/AuthController');

router.get('/login',authController.login);
router.get('/addAcc',authController.addAcc);
router.post('/createUser',authController.creatUser);
router.post('/userlogin',authController.userlogin);
module.exports = router;