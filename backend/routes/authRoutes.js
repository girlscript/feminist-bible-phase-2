const express = require('express');
const passport = require('passport');
const autController = require('../controllers/authController');
const router = express.Router();

router.route('/signup').post(autController.signup);
router.route('/signin').post(autController.signin);

module.exports = router;
