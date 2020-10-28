const mongoose = require('mongoose');
const forumPostCommentModelSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'ForumPost',
    },
    likes: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    comment: {
      type: String,
    },
    replies: [
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

const ForumPostComment = mongoose.model(
  'ForumPostComment',
  forumPostCommentModelSchema
);
module.exports = ForumPostComment;
