const mongoose = require('mongoose');

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
    approved: {
      type: Boolean,
      required: true,
      default: false
    },
    declined: {
      type: Boolean,
      required: true,
      default: false
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
