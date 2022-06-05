const express = require("express");
const { getCoffeShops } = require("../server/controllers/coffeShopController");

const coffeShopsRouter = express.Router();

coffeShopsRouter.get("/list", getCoffeShops);

module.exports = coffeShopsRouter;
