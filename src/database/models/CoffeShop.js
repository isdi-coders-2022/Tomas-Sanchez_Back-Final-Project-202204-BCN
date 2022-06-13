const { Schema, model } = require("mongoose");

const CoffeeShopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  rate: {
    type: Number,
    max: 10,
    min: 0,
  },
});

const CoffeShop = model("CoffeShop", CoffeeShopSchema, "coffeshops");

module.exports = CoffeShop;
