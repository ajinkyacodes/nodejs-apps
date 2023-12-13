var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Added Packages
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var upload = multer({dest:'./uploads'});
var flash = require('connect-flash');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { ExpressValidator } = require('express-validator');

var app = express();

// Adding Express Messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Handle File Uploads
// app.use(multer({dest:'./uploads'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle Sessions
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
app.use(ExpressValidator)

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