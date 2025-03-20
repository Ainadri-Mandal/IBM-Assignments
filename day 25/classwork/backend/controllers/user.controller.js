const { log } = require("node:console");
const { usermodel } = require("../models/user.model");
const bcrypt =require("bcrypt")

const signUp= async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
            if (err){
                return res.status(400).send({err})
            }else{
            const userData= new usermodel({username,email,password:hash});
            await userData.save();
            res.status(200).send({massage:"user registered successfully"})
            }
            
        });

        
    }catch(error){
        return res.status(400).send({error:error.massage})
    }
}

module.exports={
    signUp
}