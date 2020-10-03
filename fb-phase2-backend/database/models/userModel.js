const mongoose = require('mongoose');
<<<<<<< HEAD
=======
const validator = require('validator');
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa

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
<<<<<<< HEAD
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
=======
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
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    },
    photo: {
      type: String,
<<<<<<< HEAD
      trim: true,
      required: true,
      unique: true,
=======
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    },
    phone: {
      type: Number,
      unique: true,
<<<<<<< HEAD
      maxlength: 12,
      trim: true,
=======
      required: [true, 'Please provide your phone number'],
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    },
    password: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
=======
    passwordConfirm: {
      type: String,
    },
    token: {
      type: String,
    },
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
