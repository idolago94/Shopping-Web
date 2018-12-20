var express = require('express');
var router = express.Router();
var cartProduct = require('../models/cartProducts-model');

// get all
router.get('/',async function(req, res, next) {
  let allCartsProducts= await cartProduct.find({});
  res.json(allCartsProducts);
});

// get by cart
router.get('/bycart/:id',async function(req, res, next) {
    let cartProducts= await cartProduct.find({ cart_id: req.params.id });
    res.json(cartProducts);
});

// add new cart product
router.post('/',async function(req, res, next) {
    let newCartProduct = new cartProduct(req.body);
    let response = await newCartProduct.save();
    res.json(response);
});

// update by id
router.put('/:id',async function(req, res, next) {
    let newCartProduct= await cartProduct.findByIdAndUpdate(req.params.id, req.body);
    res.json(newCart);
});

// delete by id
router.delete('/:id',async function(req, res, next) {
    let response= await cartProduct.findByIdAndDelete(req.params.id);
    res.json(response);
});

module.exports = router;
