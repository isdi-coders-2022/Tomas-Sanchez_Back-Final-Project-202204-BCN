const { Schema, model } = require("mongoose");


const CoffeShopSchema = new Schema({
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
    max: 5,
    min: 0,
  
});

const CoffeShop = model("CoffeShop", CoffeShopSchema, "CoffeShops");

module.exports = CoffeShop;
