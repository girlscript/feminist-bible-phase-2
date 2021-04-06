const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//sending Signup as a Path parameter within this route.
router.route('/signup').post(userController.signup);

//export this router to use it in App.js
module.exports = router;

//sending userId as a parameter within this route.
router
  .route('/:userId')
  .get(userController.getUserProfile)
  .put(userController.updateUser);
