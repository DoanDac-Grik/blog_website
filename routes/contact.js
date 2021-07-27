const express = require('express');
const router = express.Router();
const contactController = require('../controller/ContactController');

router.get('/', contactController.contact);
module.exports = router;