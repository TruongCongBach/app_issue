const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const nunjucks     = require('nunjucks');
const indexRouter  = require('./routes/index');
const usersRouter  = require('./routes/users');
const express      = require('express');

module.exports = function (app) {

    nunjucks.configure('views', {
        autoescape: true,
        express: app
    });

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
};