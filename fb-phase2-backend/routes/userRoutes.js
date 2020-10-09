const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/signup').post(userController.signup)

module.exports = router;

router
    .route('/:userId')
    
    .get(userController.getUserProfile)
    .put(userController.updateUser);