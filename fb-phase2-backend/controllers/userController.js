const User=require('../database/models/userModel');

exports.signup = (req, res) => {
  //
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId});
        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'No user found',
            });
        }
        res.status(200).json({
            message: 'Success',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
};