const ForumPost = require('../database/models/forumPostModel')

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