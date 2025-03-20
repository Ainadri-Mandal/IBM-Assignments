const express = require('express');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');
const cors = require('cors');
const { auth } = require('./middlewares/auth.middleware');
const { productRouter } = require('./routes/products.route');
require('dotenv').config()

const app = express();
app.use(cors())

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to SVU backend App..!!");
});


app.use("/api/auth",userRouter);
// app.use(auth)
app.use("/api", productRouter);



app.listen(process.env.PORT, async()=>{
   try {
        await connectDB
        console.log("DB is connected");
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
   } catch (error) {
        console.log(error.message);
   }
});


