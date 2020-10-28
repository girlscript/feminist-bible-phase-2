const express = require('express');
const storyController = require('../controllers/storyController');
const router = express.Router();

router
  .route('/all')
  .get(storyController.getAllStories)

router
  .route('/:storyId')
  .get(storyController.getStory)
  .post(storyController.updateStory)
  .delete(storyController.deleteStory)
  
  router
  .route('/')
  .post(storyController.createStory);
module.exports = router;
