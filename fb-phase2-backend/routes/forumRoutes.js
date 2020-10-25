const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

router.route('/newComment').post(forumController.createComment);

module.exports = router;
