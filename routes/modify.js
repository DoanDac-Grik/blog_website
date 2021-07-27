const express = require('express');
const router = express.Router();
const modifyController = require('../controller/ModifyController.js');

// router.get('/', modifyController)
router.get('/create', modifyController.create);
router.post('/create/new-post', modifyController.newpost);
module.exports = router;