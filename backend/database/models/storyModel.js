const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a name'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorOrg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Org',
    },
    image: {
      type: String,
    },
    heading: {
      type: String,
      trim: true,
    },
    postedOn: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
