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
router.get('/bycity/:city', async function(req, res, next) {
  let allAdmins= await Users.find({ city: req.params.city });
  res.json(allAdmins);
});

// add new user - register
router.post('/', checkIdExist, async function(req, res, next) {
  Users.register( new Users({ 
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    username: req.body.email,
    id: req.body.id,
    authority: 'user',
    city: req.body.city,
    adress: req.body.adress
   }), req.body.password, (err,user) => {
    if(err) res.json({error: err});
    res.json(user);
  });
});

// user login
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.json(err); }
    if (!user) { return res.json({failedAuthenticate: 'Invalid email or password'}); }
    req.logIn(user, function(err) {
      if (err) { return res.json(err); }
      return res.json(user);
    });
  })(req, res, next);
});

// user logout
router.get('/logout', function (req, res) {
  req.logout();
  res.json({logoutSuccedd: true});
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
