const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
    },
    email:{
        type:String,
        required:true,
        // unique:true,
    },
    password:{
        type:String,
        required:true
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "product" 
    }],
    profile:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "profile" 
    }
}, {timestamps:true});

const userModel = mongoose.model("user", userSchema);

module.exports={
    userModel
}

