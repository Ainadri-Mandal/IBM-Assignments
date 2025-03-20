require('dotenv').config();
const express = require('express');
const {connectDB} = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const {protect} = require('./middleware/authMiddleware');
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/api/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
   });
   const PORT = 8000;
   app.listen(PORT, async()=>{
   try {
   await connectDB
   console.log("DB is connected");
   console.log(`Server is running at http://localhost:${PORT}`);
   } catch (error) {
   console.log(error.message);
   }
   });
   