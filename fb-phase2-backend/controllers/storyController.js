const Story = require('../database/models/storyModel');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.code = 404;
  }
}

exports.getStory = async (req, res) => {
  try {
    const story = await Story.findOne({ _id: req.params.storyId });
    if (!story) {
      return res.status(400).json({
        message: 'Story Not found!',
      });
    }
    res.status(200).json({
      message: 'Success!',
      data: story,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error!',
    });
  }
};

exports.updateStory = async (req, res) => {
  try {
    const story_id = req.params.storyId;
    const story = await Story.findOneAndUpdate({ _id: story_id }, req.body, {
      new: true,
    });

    if (!story)
      throw new NotFoundError(`Story with ${story_id} could not be found`);

    return res.json({ message: 'success', data: story });
  } catch (err) {
    const err_code = err.code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res
      .status(err_code)
      .json({ message: err.message || 'Internal Server Error' });
  }
};
