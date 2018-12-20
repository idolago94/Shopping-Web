const mongoose = require('mongoose');

const cartProducts = mongoose.model('cartProducts',
 {
      product_id: String,
      quantity: Number,
      total_price: Number,
      cart_id: String
 });

 module.exports=cartProducts;