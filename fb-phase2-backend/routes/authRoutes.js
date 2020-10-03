const express = require('express');
const autController = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /api/auth/signup:
 *    post:
 *      description: create a new user
 *      produces:
 *        - application/json
 *      parameters:
 *        -  name: p1
 *           description: placeholder parameter
 *           in: body
 *           required: true
 *           schema:
 *              $ref: '#/definitions/User'
 *      tags:
 *        - Auth
 *      responses:
<<<<<<< HEAD
 *        200:
=======
 *        201:
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
 *          description: user created
 */
router.route('/signup').post(autController.signup);

/**
 * @swagger
 * /api/auth/signin:
 *    post:
 *      description: user login
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: credentials
 *          description: user credentials
 *          in: body
 *          required: true
 *          schema:
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *      tags:
 *        - Auth
 *      responses:
 *        200:
 *          description: signed-in suggessfully
 */
router.route('/signin').post(autController.signin);

module.exports = router;
