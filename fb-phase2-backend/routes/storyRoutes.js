const express = require("express");
const storyController = require("../controllers/storyController");
const router = express.Router();

router.route("/:storyId").get(storyController.getStory)

module.exports = router;