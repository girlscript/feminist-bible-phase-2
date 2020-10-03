const mongoose = require('mongoose');

<<<<<<< HEAD
/**
 * @swagger
 * definitions:
 *    Admin:
 *     properties:
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *      email:
 *         type: string
 *      phone:
 *        type: number
 *        unique: true
 *      password:
 *        type: string
 */
const adminSchema = new mongoose.Schema(
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
=======
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
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
<<<<<<< HEAD
      maxlength: 12,
      trim: true,
=======
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
    },
    password: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
=======
    token: {
      type: String,
    },
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admin', adminSchema);
