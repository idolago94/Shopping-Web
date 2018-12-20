const mongoose = require('mongoose');

const Products = mongoose.model('Products',
 {
      name: String,
      category_id: String,
      price: Number,
      picture: String
 });

 module.exports=Products;