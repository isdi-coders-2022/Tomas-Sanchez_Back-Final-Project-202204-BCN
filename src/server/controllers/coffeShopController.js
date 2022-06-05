require("dotenv").config();
const debug = require("debug")("coffeShops:controllers:coffeShopsControllers");
const chalk = require("chalk");
const CoffeShop = require("../../database/models/CoffeShop");
const customError = require("../../utils/customError");

const getCoffeShops = async (req, res, next) => {
  debug(chalk.yellowBright("New CoffeShops list request received"));

  const coffeShops = await CoffeShop.find();

  if (coffeShops.length === 0) {
    const error = customError(404, "CoffeShops not found");
    next(error);
    return;
  }
  res.status(200).json(coffeShops);
};

module.exports = { getCoffeShops };
