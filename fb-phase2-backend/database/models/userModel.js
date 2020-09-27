const mongoose = require('mongoose');
const validator = require('validator');

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
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: {
      type: String,
    },
    phone: {
      type: Number,
      unique: true,
      required: [true, 'Please provide your phone number'],
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirm: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
