const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getCoffeeShops,
  deleteCoffeShop,
  createCoffeeShop,
} = require("../server/controllers/coffeeShopController");

const coffeeShopsRouter = express.Router();

const upload = multer({
  dest: path.join("uploads", "images"),
});

coffeeShopsRouter.get("/list", getCoffeeShops);
coffeeShopsRouter.delete("/:idCoffeeShop", deleteCoffeShop);
coffeeShopsRouter.post("/", upload.single("image"), createCoffeeShop);

module.exports = coffeeShopsRouter;
