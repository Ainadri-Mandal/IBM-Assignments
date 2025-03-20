const userModel = require('../models/user.model'); 
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(err) {
                return res.status(500).json({error:err});
            } else {
                const userData = new userModel({username,email, password:hash});
                await userData.save();
            }
        })
        
        res.status(200).send({ message: "User registered successfully" });
    } catch (e) {
        if (e.name === 'ValidationError') {
            const errors = {};
            for (const field in e.errors) {
                errors[field] = e.errors[field].message;
            }
            return res.status(400).json({ errors: errors });
        }
        if (e.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }

        res.status(400).send({ error: e.message });
    }
};

module.exports = {
    signup,
};