const mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *    Admin:
 *     properties:
 *      name:
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
    name: {
      type: String,
      required: true,
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
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admin', adminSchema);
