const express = require("express");
const {
  userRegister,
  userLogin,
} = require("../server/controllers/userController");

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/register", userRegister);

module.exports = userRouter;
