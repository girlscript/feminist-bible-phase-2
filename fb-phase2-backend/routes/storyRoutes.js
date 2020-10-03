const express = require('express');
const storyController = require('../controllers/storyController');
const router = express.Router();

router
<<<<<<< HEAD
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
   *      tags:
   *        - Story
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
   *      tags:
   *        - Story
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

=======
  .route('/all')
  .get(storyController.getAllStories)

router
  .route('/:storyId')
  .get(storyController.getStory)
  .post(storyController.updateStory)
  .delete(storyController.deleteStory)
  
  router
  .route('/')
  .post(storyController.createStory);
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
module.exports = router;
