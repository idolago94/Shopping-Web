const mongoose = require('mongoose');

const cart_products = mongoose.model('cart_products',
 {
      product_id: String,
      quantity: Number,
      cart_id: String
 });

 module.exports=cart_products;