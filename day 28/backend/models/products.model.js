const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    desc:{
        type:String,
    },
    price:{
        type:Number
    },
    createdBy: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        // required: true
    }
}, {timestamps:true});

const productModel = mongoose.model("product", productSchema);

module.exports={
    productModel
}

