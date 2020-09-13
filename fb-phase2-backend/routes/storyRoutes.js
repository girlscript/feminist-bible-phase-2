const express = require('express');
const storyController = require('../controllers/storyController');
const router = express.Router();

router
  .route('/:storyId')
  /**
   * @swagger
   * /api/story/{storyId}:
   *    get:
   *      description: Get a Story by ID
   *      produces:
   *        - application/json
   *      parameters:
   *        -  name: storyId
   *           description: Story ID
   *           in: path
   *           required: true
   *           type: string
   *      responses:
   *        200:
   *          description: user created
   *          schema:
   *            $ref: '#/definitions/User'
   *        400: 
   *          description: Story Not Found
   *          schema:
   *            type: object
   *            properties:
   *              error:
   *                type: string
   *          
   */
  .get(storyController.getStory)
  /**
   * @swagger
   * /api/story/{storyId}:
   *    put:
   *      description: Update a Story
   *      produces:
   *        - application/json
   *      parameters:
   *        -  name: storyId
   *           description: Story ID
   *           in: path
   *           required: true
   *           type: string
   *        - name: story-object
   *          description: Story Object with modified Fields
   *          in: body
   *          required: true
   *          schema:
   *            $ref: '#/definitions/Story'
   *      responses:
   *        200:
   *          description: Story Updated
   *          schema:
   *            $ref: '#/definitions/User'
   *        404:
   *          description: Story Not Found
   *          schema:
   *            type: object
   *            properties:
   *              error:
   *                type: string
   */
  .put(storyController.updateStory);

module.exports = router;
