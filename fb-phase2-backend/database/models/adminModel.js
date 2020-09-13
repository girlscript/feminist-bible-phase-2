const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema ({
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
          maxlength:10,
          trim:true
          
      },
      password: {
        type: String,
        required: true
        
      }    
    
    
    });
    module.exports = mongoose.model("Admin", adminSchema);
