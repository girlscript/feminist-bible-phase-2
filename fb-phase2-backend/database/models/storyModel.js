const mongoose = require('mongoose');

<<<<<<< HEAD
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
=======
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
const storySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
<<<<<<< HEAD
      required: true,
=======
      required: [true, 'Please provide a name'],
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
<<<<<<< HEAD
    image: {
      type: String,
      required: true,
    },
=======
    authorOrg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Org',
    },
    image: {
      type: String,
    },
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    heading: {
      type: String,
      trim: true,
    },
<<<<<<< HEAD
=======
    postedOn: {
      type: Date,
      default: Date.now(),
    },
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
