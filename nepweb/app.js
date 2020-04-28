var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var lessMiddleware = require('less-middleware');
var logger = require('morgan');

//Routes is similiar to "include."

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var about_router = require('./routes/about');
app.use('/about', about_router);

var contact_router = require('./routes/contact');
app.use('/contact', contact_router);

var products_router = require('./routes/products');
app.use('/products', products_router);

var blog_router = require('./routes/blog')
app.use('/blog', blog_router);

var tShirts_router = require('./routes/tShirts')
app.use('/tShirts', tShirts_router);

app.use('/tShirts', tShirts_router);


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
