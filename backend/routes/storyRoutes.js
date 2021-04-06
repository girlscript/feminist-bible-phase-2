const express = require('express');
const storyController = require('../controllers/storyController');
const router = express.Router();

//sending all as a path parameter within this route to get all stories from storyController.
router.route('/all').get(storyController.getAllStories);

//sending storyId as a parameter within this route.
router
  .route('/:storyId')
  .get(storyController.getStory)
  .post(storyController.updateStory)
  .delete(storyController.deleteStory);

router.route('/').post(storyController.createStory);

//export this router to use it in App.js
module.exports = router;
