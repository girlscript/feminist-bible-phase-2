const Story = require("../database/models/storyModel")

exports.getStory = async (req, res)=>{
    try{
        const story = await Story.findOne({_id: req.params.storyId})
        if(!story){
            return res.status(400).json({
                message: "Story Not found!"
            })
        }
        res.status(200).json({
            message: 'Success!',
            story: story
        })
    }
    catch(error){
        res.status(400).json({
            message: "Error!"
        })
    }
}