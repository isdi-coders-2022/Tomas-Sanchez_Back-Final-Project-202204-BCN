const express = require("express");
const { validate } = require("../database/models/UserSchema");
const {
  userRegister,
  userLogin,
} = require("../server/controllers/userController");
const {
  credentialsRegisterSchema,
  credentialsLoginSchema,
} = require("../server/schemas/useCredentials");

const userRouter = express.Router();

userRouter.post("/login", validate(credentialsLoginSchema), userLogin);
userRouter.post("/register", validate(credentialsRegisterSchema), userRegister);

module.exports = userRouter;
