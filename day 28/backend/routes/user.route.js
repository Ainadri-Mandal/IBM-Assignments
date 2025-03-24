const express = require('express');
const { signUp, login, getUser } = require('../controllers/user.controller');
const { auth } = require('../middlewares/auth.middleware');

const userRouter = express.Router();

userRouter.post("/register", signUp);
userRouter.post("/login", login);
userRouter.get("/user", auth, getUser);


module.exports={
    userRouter
}