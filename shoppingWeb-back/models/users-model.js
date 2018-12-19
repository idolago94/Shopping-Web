const mongoose = require('mongoose');

const Users = mongoose.model('Users',
 {
      firstName: String,
      lastName: String,
      email: String,
      id: String,
      password: String,
      authority: String,
      city: String,
      adress: String
 });

 module.exports=Users;