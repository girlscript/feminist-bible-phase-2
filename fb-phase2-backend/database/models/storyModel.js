const mongoose = require("mongoose")

const storySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    image:{
        type: String,
        required:true
    },
    heading:{
        type: String,
        trim: true
    }
}, {
    timestamps:true
})

const Story = mongoose.model('Story', storySchema )
module.exports = Story