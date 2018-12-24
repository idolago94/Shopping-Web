// const mongoose = require('mongoose');

// const Users = mongoose.model('Users',
//  {
//       firstName: String,
//       lastName: String,
//       email: String,
//       id: String,
//       password: String,
//       authority: String,
//       city: String,
//       adress: String
//  });

//  module.exports=Users;



 var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Users = new Schema({
      firstName: String,
      lastName: String,
      username: String,
      id: String,
      password: String,
      authority: String,
      city: String,
      adress: String
});
Users.plugin(passportLocalMongoose);
module.exports = mongoose.model('Users', Users);