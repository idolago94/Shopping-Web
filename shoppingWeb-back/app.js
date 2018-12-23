var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; // set the passport strategy

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categoriesRouter');
var productRouter = require('./routes/productsRouter');
var cartsRouter = require('./routes/cartsRouter');
var cartProductsRouter = require('./routes/cartProductsRouter');
var ordersRouter = require('./routes/ordersRouter');

var app = express();

var Users = require('./models/users-model');
passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());
// connect to mongoDB
mongoose.connect('mongodb://localhost/shoppingweb');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
  secret: '123qwe',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/carts', cartsRouter);
app.use('/cart_products', cartProductsRouter);
app.use('/orders', ordersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
