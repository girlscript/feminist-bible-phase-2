const ForumPost = require('../database/models/forumPostModel');

//create forum post
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
exports.likeForumPost = async (req, res)=>{
    try{
        let forumPost = await ForumPost.findById(req.params.forumpostid)
        forumPost = await ForumPost.findByIdAndUpdate(req.params.forumpostid, {likes: forumPost.likes + 1}, {
            new: true,
            runValidators: true,
          })
        res.status(200).json({
            status: 'success',
            data: forumPost
        })
    } catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }

}
