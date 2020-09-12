const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    phone:{
        type:Number,
        unique:true,
        maxlength:12,
        trim:true
        
    },
    password: {
      type: String,
      required: true,
      trim:true
    }    
    },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
