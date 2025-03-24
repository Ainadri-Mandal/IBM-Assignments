const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema({
    profileImage:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    }
}, {timestamps:true});

const userProfileModel = mongoose.model("profile", userProfileSchema);

module.exports={
    userProfileModel
}

