var express = require('express');
var router = express.Router();
var Product = require('../models/products-model');

// get all
router.get('/',async function(req, res, next) {
  let allProducts= await Product.find({});
  res.json(allProducts);
});

// get by id
router.get('/:id',async function(req, res, next) {
    let product= await Product.findById(req.params.id);
    res.json(product);
});

// get by category
router.get('/bycategory/:categoryID',async function(req, res, next) {
    let allCategorysProducts= await Product.find({ category_id: req.params.categoryID });
    res.json(allCategorysProducts);
});

// add new product
router.post('/',async function(req, res, next) {
    let newProduct = new Product(req.body);
    let response = await newProduct.save();
    res.json(response);
});

// update by id
router.put('/:id',async function(req, res, next) {
    let product= await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
});

// delete by id
router.delete('/:id',async function(req, res, next) {
    let product= await Product.findByIdAndDelete(req.params.id);
    res.json(product);
});

module.exports = router;
