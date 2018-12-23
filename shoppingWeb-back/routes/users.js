var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/users-model');

async function checkIdExist (req, res, next) {
  let response = await Users.findOne({ id:req.body.id });
  console.log(response);
  if(!response) next();
  else {
    var err = new Error("id allready taken");
     res.json({error: {name: 'IdExist', message: 'A user with the given id is already registered'}});
  }
}



// get all
router.get('/',async function(req, res, next) {
  let allUsers= await Users.find({});
  res.json(allUsers);
});

// get all users
router.get('/allusers',async function(req, res, next) {
  let allUsers= await Users.find({ authority: 'user' });
  res.json(allUsers);
});

// get all admins
router.get('/alladmins',async function(req, res, next) {
  let allAdmins= await Users.find({ authority: 'admin' });
  res.json(allAdmins);
});

// get by id
router.get('/:id',async function(req, res, next) {
  let allAdmins= await Users.find({ id: req.params.id });
  res.json(allAdmins);
});

// get by city
router.get('/bycity/:city',async function(req, res, next) {
  let allAdmins= await Users.find({ city: req.params.city });
  res.json(allAdmins);
});

// add new user
router.post('/', checkIdExist, async function(req, res, next) {
  // let newUser = new Users(req.body);
  // let response = await newUser.save();
  // res.json(response);


  console.log('user register');
  Users.register( new Users({ 
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    username: req.body.email,
    id: req.body.id,
    authority: req.body.authority,
    city: req.body.city,
    adress: req.body.adress
   }), req.body.password, (err,user) => {
    if(err) res.json({error: err});
    console.log(err);
    passport.authenticate('local')(req, res, () => {
      res.json(user);
    })
  });
});

// update user by id
router.put('/:id',async function(req, res, next) {
  let response = await Users.findOneAndUpdate({ id: req.params.id }, req.body);
  res.json(response);
});

// delete user by id
router.delete('/:id',async function(req, res, next) {
  let response = await Users.findOneAndDelete({ id: req.params.id });
  res.json(response);
});

module.exports = router;
