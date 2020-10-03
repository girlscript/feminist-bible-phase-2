const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

<<<<<<< HEAD
=======
router.route('/signup').post(userController.signup)

>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
module.exports = router;

router
    .route('/:userId')
    .get(userController.getUserProfile)
    .put(userController.updateUser);