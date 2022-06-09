require("dotenv").config();
const debug = require("debug")("coffeShops:controllers:coffeShopsControllers");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const CoffeShop = require("../../database/models/CoffeShop");
const customError = require("../../utils/customError");

const getCoffeeShops = async (req, res, next) => {
  debug(chalk.yellowBright("New CoffeShops list request received"));

  const coffeShops = await CoffeShop.find();

  if (coffeShops.length === 0) {
    const error = customError(404, "CoffeShops not found");
    next(error);

    return;
  }
  res.status(200).json({ coffeShops });
};

const deleteCoffeShop = async (req, res) => {
  debug(chalk.green("Request to delete a CoffeeShop received"));

  const { idCoffeeShop } = req.params;

  await CoffeShop.findByIdAndDelete(idCoffeeShop);
  res.status(200).json({ message: `The CoffeeShop has been deleted` });
};

const createCoffeeShop = async (req, res, next) => {
  debug(chalk.green("Request to create a CoffeeShop received"));

  const coffeeShop = req.body;

  const { file } = req;

  if (file) {
    const newFileName = `${Date.now()}${file.originalname}`;

    fs.rename(
      path.join("uploads", "images", file.filename),
      path.join("uploads", "images", newFileName),

      (error) => {
        if (error) {
          debug(chalk.red("Error renaming picture post"));

          next(error);
        }
      }
    );
    coffeeShop.image = newFileName;
  }
  const newCoffeeShop = await CoffeShop.create(coffeeShop);
  res.status(201).json(newCoffeeShop);
};

module.exports = { getCoffeeShops, deleteCoffeShop, createCoffeeShop };
