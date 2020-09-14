const express = require('express');
const autController = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * definitions:
 *    User:
 *     properties:
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *      email:
 *         type: integer
 *      phone:
 *        type: number
 *      password:
 *        type: string
 */

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
 *      responses:
 *        200:
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
 *                
 *      responses:
 *        200:
 *          description: signed-in suggessfully
 */
router.route('/signin').post(autController.signin);

module.exports = router;
