const mongoose = require('mongoose');
const validator = require('validator');

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
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phone: {
      type: Number,
      unique: true,
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

module.exports = mongoose.model('Admin', adminSchema);
