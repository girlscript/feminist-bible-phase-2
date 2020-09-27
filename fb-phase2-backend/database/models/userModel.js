const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *    User:
 *     properties:
 *      firstName:
 *        type: string
 *        example: Jon
 *      lastName:
 *        type: string
 *        example: Snow
 *      email:
 *        type: string
 *        example: snow@northman.org
 *      phone:
 *        type: number
 *        example: 9472645237
 */
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastName: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      unique: true,
      maxlength: 12,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
