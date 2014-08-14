var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
require('./filters')(swig);

var routes = require('./routes/index');
var users = require('./routes/users');
var add = require('./routes/add');
var wiki = require('./routes/wiki');
var edit = require('./routes/edit');
var deletePage = require('./routes/delete');

// TODO
// var add_page = require('./routes/users');

var app = express();
app.engine('html', swig.renderFile);

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/wikistack');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'mongodb connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/add', add);
app.use('/wiki', wiki);
app.use('/edit', edit);
app.use('/delete', deletePage);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    swig.setDefaults({ cache: false });
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
