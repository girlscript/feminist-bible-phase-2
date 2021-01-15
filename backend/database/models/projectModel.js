const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
        required: [true, 'Please provide a title'],
    },
    description: {
      type: String,
      trim: true,
        required: [true, 'Please provide a description'],
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'Org',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
