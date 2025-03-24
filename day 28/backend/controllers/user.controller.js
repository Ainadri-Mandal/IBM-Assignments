const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    // console.log(req.body)

    if (!name || !email || !password){
        return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser){
        // console.log(existingUser)
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send({ error: err.message })
            } else {
                const userData = new userModel({ name, email, password: hash });

                await userData.save();

                return res.status(200).send({ message: "user registered successfully" })
            }
        });

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
};


const login = async(req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    console.log(user)

    if (!user){
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({user:user, token: token });
};



const getUser = async(req, res) => {

    let userID = req.user;


    try {
        const userData = await userModel.find({_id: userID}).select("-password").populate("products");
        console.log(userData)

        res.send(userData);
    } catch (error) {
        res.send({error: error.message});
    }
}




module.exports = {
    signUp, login, getUser
}