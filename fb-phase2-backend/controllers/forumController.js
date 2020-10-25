const ForumPostComment = require('../database/models/forumPostCommentModel');
require('../config/dotenv');

exports.createComment =async (req,res)=>{
    try{
     const {post,user,comment} = req.body;
     const newComment = await ForumPostComment.create({
         post,
         user,
         comment,
     });

     await newComment.save();

     return res.status(200).json({
         success:true,
         data:{
             post,
             user,
             comment,
             likes:0,
             replies:[]
         }
     })
  } catch(err){
      console.log(err.message);
      return res.status(400).json({msg:"cannot create comment"})
  }
}