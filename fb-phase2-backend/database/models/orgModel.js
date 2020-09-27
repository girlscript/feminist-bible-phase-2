const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *    Org:
 *     properties:
 *      name:
 *        type: string
 *      email:
 *         type: string
 *        unique: true
 *      phone:
 *        type: number
 *        unique: true
 */

const orgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    image: {
      type: String,
    },
    admin: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Org', orgSchema);
