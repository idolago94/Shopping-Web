const mongoose = require('mongoose');

const Carts = mongoose.model('Carts',
 {
      user_id: String,
      production_date: String
 });

 module.exports=Carts;