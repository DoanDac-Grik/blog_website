const express = require('express');
const router = express.Router();
const postController = require('../controller/PostController.js');

router.get('/:slug', postController.post);
module.exports = router;