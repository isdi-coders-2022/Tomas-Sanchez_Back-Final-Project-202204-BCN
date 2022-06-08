const express = require("express");
const {
  getCoffeeShops,
} = require("../server/controllers/coffeeShopController");

const coffeeShopsRouter = express.Router();

coffeeShopsRouter.get("/list", getCoffeeShops);

module.exports = coffeeShopsRouter;
