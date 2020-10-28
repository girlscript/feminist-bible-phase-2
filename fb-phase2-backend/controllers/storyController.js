const Story = require('../database/models/storyModel');

exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json({
      status: 'success',
      data: stories,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createStory = async (req, res) => {
  try {
    const { name, author, image, heading } = req.body;
    if (!name || !author) {
      return res.status(400).json({
        status: 'fail',
        message: 'Fields cannot be empty',
      });
    }

    const newStory = await Story.create(req.body);
    res.status(201).json({
      success: 'success',
      data: newStory,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

//get story by id
exports.getStory = async (req, res) => {
  try {
    const story = await Story.findOne({ _id: req.params.storyId });
    if (!story) {
      return res.status(400).json({
        status: 'fail',
        message: 'No story found',
      });
    }
    res.status(200).json({
      message: 'Success',
      data: story,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

//get all stories
exports.getAllStories = async (req, res)=>{
  try{
    const stories = await Story.find()
    
    if(!stories){
      res.status(400).json({
        status: 'fail',
        message: 'No stories found',
      });
    }

    res.status(200).json({
      status: "success",
      message: stories
    })

  } catch(error){
    
    res.status(400).json({
      status: "fail",
      message: error
    })
  }
}

exports.updateStory = async (req, res) => {
  try {
    const story = await Story.findOneAndUpdate(
      { _id: req.params.storyId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!story) {
      return res.status(400).json({
        status: 'fail',
        message: 'No story found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: story,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteStory = async (req, res) => {
  try {
    const story_id = req.params.storyId;
    if (!story_id) {
      throw new NotFoundError(`Story with ${story_id} could not be found`);
    }
    await Story.findOneAndDelete({ _id: story_id });
    res.json({
      status:'success',
      message:'Deleted Story Successfully'
      
    });

  
  } catch (err) {
    res.json({
      status:'fail', 
      message: err,
    });
  }
};