var express = require('express');
var router = express.Router();
var Order = require('../models/orders-model');

// get all
router.get('/',async function(req, res, next) {
  let allOrders= await Order.find({});
  res.json(allOrders);
});

// get by id
router.get('/:id',async function(req, res, next) {
    let order= await Order.findById(req.params.id);
    res.json(order);
});

// get by user id
router.get('/byuser/:id',async function(req, res, next) {
    let userOrders= await Order.find({ user_id: req.params.id });
    res.json(userOrders);
});

// add new order
router.post('/',async function(req, res, next) {
    let newOrder = new Order(req.body);
    let response = await newOrder.save();
    res.json(response);
});

// update by id
router.put('/:id',async function(req, res, next) {
    let newOrder= await Order.findByIdAndUpdate(req.params.id, req.body);
    res.json(newOrder);
});

// delete by id
router.delete('/:id',async function(req, res, next) {
    let response= await Order.findByIdAndDelete(req.params.id);
    res.json(response);
});

module.exports = router;
