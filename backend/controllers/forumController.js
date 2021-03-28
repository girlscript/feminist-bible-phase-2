const ForumPostComment = require('../database/models/forumPostCommentModel');
const ForumPost = require('../database/models/forumPostModel');

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

exports.editForumPost = async(req, res) => {
  try {
    const { upadtedHeading, updatedAuthor, updatedDescription } = req.body;

    if (!upadtedHeading || !updatedAuthor) {
      return res.status(400).json({
        status: 'fail',
        message: 'Fields cannot be empty',
      });
    }
    const postId = req.params.forumpostid;
    let forumPost = await ForumPost.findByIdAndUpdate(postId, {
      heading: req.body.upadtedHeading,
      author: req.body.updatedAuthor,
      description: req.body.updatedDescription,
    });
            
    res.status(200).json({
      status: 'success',
      data: forumPost
    });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message: err
    });
  }
};
