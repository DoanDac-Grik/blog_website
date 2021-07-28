const express = require('express');
const router = express.Router();
const modifyController = require('../controller/ModifyController.js');
const validateMiddleware = require('../middleware/validateMiddleware.js');
// router.get('/', modifyController)
router.get('/create', modifyController.create);
router.post('/create/new-post',validateMiddleware, modifyController.newpost);
module.exports = router;