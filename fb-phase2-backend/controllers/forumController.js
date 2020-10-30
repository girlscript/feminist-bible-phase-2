const ForumPost = require('../database/models/forumPostModel')

// //create a post
// exports.createPost = async (req, res) => {
//     try{
//         const post = await ForumPost.create(req.body);
//         console.log(post)
//         res.status(200).json({
//             success: 'success',
//             data: post
//           });
//     } catch(error){
//         console.log(error)
//         res.status(400).json({
//             status: 'fail',
//             error: error.message
//         })
//     }
// }


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