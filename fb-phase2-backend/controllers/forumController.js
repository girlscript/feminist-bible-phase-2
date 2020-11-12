const ForumPostComment = require('../database/models/forumPostCommentModel');
require('../config/dotenv');

exports.createComment = async (req, res) => {
  try {
    let postId = req.params.forumpostid;
    const { userId, comment } = req.body;
    const newComment = await ForumPostComment.create({
      post: postId,
      user: userId,
      comment,
      likes: 0,
      replies: [],
    });

    await newComment.save();

    return res.status(200).json({
      success: true,
      data: {
        ...newComment._doc,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot create comment' });
  }
};

const ForumPost = require('../database/models/forumPostModel');
exports.createForumPost = async (req, res) => {
  try {
    const { heading, author, description } = req.body;
    if (!heading || !author) {
      return res.status(400).json({
        status: 'fail',
        message: 'Fields cannot be empty',
      });
    }

    const newForumPost = await ForumPost.create(req.body);
    res.status(201).json({
      success: 'success',
      data: newForumPost,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

//like a post
exports.likeForumPost = async (req, res) => {
  try {
    let forumPost = await ForumPost.findById(req.params.forumpostid);
    forumPost = await ForumPost.findByIdAndUpdate(
      req.params.forumpostid,
      { likes: forumPost.likes + 1 },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: forumPost,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};

// reply to comment
exports.commentreply = async (req, res) => {
  try {
    const forumcomment = req.params.forumcommentid;
    forumcomment = await ForumPostComment.findByIdAndUpdate(
      { _id: forumcomment },
      { $set: { reply: req.body.reply } }
    );
    return res.status(200).json({
      status: 'success',
      data: forumcomment,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot reply to comment' });
  }
};

//Delete comment from Forum post
exports.deleteComment = async (req, res) => {
  try {
    let postId = req.params.forumpostid;
    let commentId = req.params.commentId;
    let userId = req.params.userId;
    if (!commentId) {
      throw new NotFoundError(`Comment with ${commentId} can't be found`);
    }
    await ForumPostComment.findOneAndDelete({
      _id: commentId,
      user: userId,
      post: postId,
    });

    res.status(200).json({
      status: 'success',
      message: 'comment deleted successfully',
    });
  } catch (error) {
    const err_code = error.err_code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res.status(err_code).json({
      status: 'fail',
      message: error.message || 'Internal Server Error',
    });
  }
};
