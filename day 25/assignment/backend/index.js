import express, { json } from "express";
const app = express();
import cors from 'cors';
import morgan from "morgan";
import { config } from "dotenv";
import { connectToDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/getProductRoute.js";
config();

// middlewares 
app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req,res)=> {
    res.status(200).send("This is default route");
});

// my made routes 
app.use('/v1/api/',userRouter);
app.use('/v1/api/', productRouter);

connectToDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT} and url is http://localhost:${PORT}/`);
});