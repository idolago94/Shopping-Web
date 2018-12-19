var express = require('express');
var router = express.Router();
var Category = require('../models/categories-model');

// get all
router.get('/',async function(req, res, next) {
  let allCategories= await Category.find({});
  res.json(allCategories);
});

// get by id
router.get('/:id',async function(req, res, next) {
    let response= await Category.findById(req.params.id);
    res.json(response);
});

// get by name
router.get('/byname/:name',async function(req, res, next) {
    let response= await Category.find({ name: req.params.name })
    res.json(response);
});

// delete by id
router.delete('/:id',async function(req, res, next) {
    let response= await Category.findByIdAndDelete(req.params.id);
    res.json(response);
});

// add new category
router.post('/',async function(req, res, next) {
    let newCategory = new Category(req.body);
    let response = await newCategory.save();
    res.json(response);
});

// update category by id
router.put('/:id',async function(req, res, next) {
    let response = await Category.findOneAndUpdate(req.params.id, req.body);
    res.json(response);
  });

module.exports = router;
