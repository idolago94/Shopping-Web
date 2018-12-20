var express = require('express');
var router = express.Router();
var Cart = require('../models/carts-model');

// get all
router.get('/',async function(req, res, next) {
  let allCarts= await Cart.find({});
  res.json(allCarts);
});

// get by id
router.get('/:id',async function(req, res, next) {
    let cart= await Cart.findById(req.params.id);
    res.json(cart);
});

// get by user id
router.get('/byuser/:id',async function(req, res, next) {
    let userCarts= await Cart.find({ user_id: req.params.id })
    res.json(userCarts);
});

// add new cart
router.post('/',async function(req, res, next) {
    let newCart = new Cart(req.body);
    let response = await newCart.save();
    res.json(response);
});

// update by id
router.put('/:id',async function(req, res, next) {
    let newCart= await Cart.findByIdAndUpdate(req.params.id, req.body);
    res.json(newCart);
});

// delete by id
router.delete('/:id',async function(req, res, next) {
    let response= await Cart.findByIdAndDelete(req.params.id);
    res.json(response);
});

module.exports = router;
