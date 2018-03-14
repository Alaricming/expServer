var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs');


var app = express();

// view engine setup
app.set('views', __dirname+'/server/views');
app.set('view engine', 'html');
app.engine("html",hbs.express4({
  partialsDir: __dirname + '/server/views/partials',
  defaultLayout: __dirname + '/server/views/layouts/default',
  layoutsDir: __dirname + '/server/views/layouts',
  extname: '.html'
}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态资源路径
app.use(express.static(path.join(__dirname, '/client')));

// 导入router
require('./server/routes/root.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404/error.html',{
    err: '404 not found'
  });
});

module.exports = app;
