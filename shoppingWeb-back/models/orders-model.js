const mongoose = require('mongoose');

const Orders = mongoose.model('Orders',
 {
      user_id: String,
      cart_id: String,
      total_price: Number,
      city: String,
      adress: String,
      delivery_date: String,
      reservation_date: String,
      payment: Number
 });

 module.exports=Orders;