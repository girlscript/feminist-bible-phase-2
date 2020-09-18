const mongoose = require('mongoose');

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admin', adminSchema);
