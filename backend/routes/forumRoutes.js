const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

router.route('/:forumpostid/like').post(forumController.likeForumPost);

router.route('/new').post(forumController.createForumPost);

router.route('/:forumpostid/comment').post(forumController.createComment);

module.exports = router;
