const express = require('express');
const autController = require('../controllers/authController');
const router = express.Router();

//Using signup as a parameter within this route to use signup from autController.
router.route('/signup').post(autController.signup);

//Using signin as a parameter within this route to use signin from autController.
router.route('/signin').post(autController.signin);

//export this router to use it in App.js
module.exports = router;
