const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *    Story:
 *     properties:
 *      name:
 *        type: string
 *      author:
 *        type: string
 *      image:
 *         type: string
 *      heading:
 *        type: string
 */
const storySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
