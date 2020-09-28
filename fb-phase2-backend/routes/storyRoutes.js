const express = require('express');
const storyController = require('../controllers/storyController');
const router = express.Router();

router
  .route('/')
  .get(storyController.getAllStories)
  .post(storyController.createStory);

router
  .route('/:storyId')
  .get(storyController.getStory)
  .post(storyController.updateStory)
  .delete(storyController.deleteStory);

module.exports = router;
