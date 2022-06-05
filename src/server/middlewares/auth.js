const debug = require("debug")("tomascafe:middlewares:auth");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const customError = require("../../utils/customError");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization.includes("Bearer ")) {
      const error = customError(401, "Bad request", "Bearer not found");
      debug(chalk.redBright("Authorization does not include a token bearer"));

      next(error);
    }
    const token = authorization.replace("Bearer ", "");
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = id;
    debug(chalk.green("Received a valid token"));

    next();
  } catch {
    const error = customError(401, "Bad request", "Invalid token");
    debug(chalk.redBright("Invalid token"));
    next(error);
  }
};

module.exports = auth;
