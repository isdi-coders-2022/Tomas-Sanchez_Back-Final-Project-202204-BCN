const express = require("express");
const {
  getCoffeeShops,
  deleteCoffeShop,
} = require("../server/controllers/coffeeShopController");

const coffeeShopsRouter = express.Router();

coffeeShopsRouter.get("/list", getCoffeeShops);
coffeeShopsRouter.delete("/:idCoffeeShop", deleteCoffeShop);

module.exports = coffeeShopsRouter;
