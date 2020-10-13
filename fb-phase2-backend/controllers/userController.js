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

exports.updateUser= async (req,res)=>{
    try {
        const user_id=req.param.userId;
        const user = await User.findByIdAndUpdate(
            {_id:user_id},
            {$set:req.body},
            {new:true,
            useFindAndModify:false},
            
        );
        if(!user){
            throw new NotFoundError(`User with ${user_id} could not be found`);
        }
        return res.status(200).json({
            status:'sucess',
            message:'User updated successfully!',
            data:user
        });

      
        
    } catch (error) {
        const err_code = error.err_code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res.status(err_code).json({ status:'fail',message: error.message || 'Internal Server Error' });
  }
        
    }

