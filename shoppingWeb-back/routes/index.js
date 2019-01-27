var express = require('express');
var router = express.Router();
var Users = require('../models/users-model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createAdmin',  async function(req, res, next) {
  Users.register( new Users({ 
    firstName:'admin',
    lastName:'admin',
    username: 'admin@gmail.com',
    id: 'admin',
    authority: 'admin'
   }), 'admin', (err,user) => {
    if(err) res.json({error: err});
    res.send('admin created!!');
  });
});

module.exports = router;
