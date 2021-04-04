const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

//Using like as a parameter within this route to like post from forumController.
router.route('/:forumpostid/like').post(forumController.likeForumPost);

//Using new as a parameter within this route to create post from forumController.
router.route('/new').post(forumController.createForumPost);

//Using comment as a parameter within this route to create comment from forumController.
router.route('/:forumpostid/comment').post(forumController.createComment);

//Using edit-post as a parameter within this route to edit post from forumController.
router.route('/:forumpostid/edit-post').post(forumController.editForumPost);

//export this router to use it in App.js
module.exports = router;
