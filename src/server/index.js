const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { notFoundError, generalError } = require("./middlewares/error");
const userRouter = require("../routers/userRouter");
const coffeeShopsRouter = require("../routers/coffeShopsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/user", userRouter);
app.use("/coffeeshops", coffeeShopsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
