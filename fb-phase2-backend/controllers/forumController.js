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
        let forum = await ForumPost.findById(req.params.forumpostid)
        forum = await ForumPost.findByIdAndUpdate(req.params.forumpostid, {likes: forum.likes + 1}, {
            new: true,
            runValidators: true,
          })
        console.log(forum)
        res.status(200).json({
            status: 'success',
            data: forum
        })
    } catch(error){
        console.log(error)
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }

}
