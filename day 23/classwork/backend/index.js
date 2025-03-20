const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=> {
    res.status(200).send(`<h1 style="color:green;">Welcome to our backend</h1>`);
});

app.use(userRouter);

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}/`);
});