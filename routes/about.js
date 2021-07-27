const express = require('express');
const router = express.Router();
const aboutController = require ('../controller/AboutController');

router.get('/', aboutController.aboutMe);
 module.exports = router;