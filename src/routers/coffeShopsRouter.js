const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getCoffeeShops,
  deleteCoffeShop,
  createCoffeeShop,
  editCoffeeShop,
} = require("../server/controllers/coffeeShopController");

const coffeeShopsRouter = express.Router();

const upload = multer({
  dest: path.join("uploads", "images"),
});

coffeeShopsRouter.get("/list", getCoffeeShops);
coffeeShopsRouter.delete("/:idCoffeeShop", deleteCoffeShop);
coffeeShopsRouter.post("/", upload.single("image"), createCoffeeShop);
coffeeShopsRouter.put(
  "/edit/:idCoffeeShop",
  upload.single("image"),
  editCoffeeShop
);

module.exports = coffeeShopsRouter;
