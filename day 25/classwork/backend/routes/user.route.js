const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
router.post('/register', async (req, res) => {
 const { name, email, password } = req.body;
 if (!name || !email || !password) return res.status(400).json({ message: 'Allfields are required' });
 const existingUser = await User.findOne({ email });
 if (existingUser) return res.status(400).json({ message: 'User already exists'
});
const hashedPassword = await bcrypt.hash(password, 10);
 const user = new User({ name, email, password: hashedPassword });
 await user.save();
 res.status(201).json({ message: 'User registered successfully' });
});
router.post('/login', async (req, res) => {
 const { email, password } = req.body;
 const user = await User.findOne({ email }); if (!user) return res.status(400).json({ message: 'Invalid credentials' });
 const isMatch = await bcrypt.compare(password, user.password);
 if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
 const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
expiresIn: '1h' });
 res.json({ token });
});
module.exports = router;