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
      required: [true, 'Please provide a name'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorOrg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Org',
    },
    image: {
      type: String,
    },
    heading: {
      type: String,
      trim: true,
    },
    postedOn: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
