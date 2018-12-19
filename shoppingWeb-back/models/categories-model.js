const mongoose = require('mongoose');

const Categories = mongoose.model('Categories',
 {
      name: String
 });

 module.exports=Categories;