const express = require('express');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');
const app = express();



app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


const PORT = 3000;
app.listen(PORT, async()=> {
    try{
        await connectDB;
        console.log("DB is connected");
        console.log(`Server is running on port ${PORT} and at http://localhost:${PORT}/`);
    }catch(e) {
        console.log("Error: ",e);
    }
});

app.use(userRouter);