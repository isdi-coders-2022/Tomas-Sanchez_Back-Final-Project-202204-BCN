const express = require("express");
const { userRegister } = require("../server/controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", userRegister);

module.exports = userRouter;
