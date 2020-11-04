const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema(
  {
    author: {
      type: String,
    },
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'ForumPostComment',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ForumPost = mongoose.model('ForumPost', forumPostSchema);
module.exports = ForumPost;
