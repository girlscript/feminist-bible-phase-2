const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastName: {
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
    },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
