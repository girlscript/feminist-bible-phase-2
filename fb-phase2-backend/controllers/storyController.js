const Story = require("../database/models/storyModel")

exports.getStory = async (req, res)=>{
    try{
        const _id = req.body.id
        const story = await Story.findOne({_id: _id})
        if(!story){
            return res.status(404).json({
                message: "Story Not found!"
            })
        }
        res.status(200).json({
            message: 'Success!',
            story: story
        })
    }
    catch(error){
        res.status(500).json({
            message: "Error!"
        })
    }
}