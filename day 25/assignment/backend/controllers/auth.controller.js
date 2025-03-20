import userModel from "";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill the form." });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 4);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    res.json({
        message: "User created successfully",
        user: { name, email },
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill the form." });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Email does not exist." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Password does not match." });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
        message: "Logged in successfully",
        user: { name: user.name, email: user.email,token:token },
    });
};