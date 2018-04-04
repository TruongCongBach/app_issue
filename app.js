const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require('nunjucks');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
const RegistrationFrom = require('./src/registration-sevice/registration-form/registration-form');
const Credential = require('./src/registration-sevice/registration-form/credential');
const Profile = require('./src/registration-sevice/registration-form/profile');
const Registration = require('./src/registration-sevice/registration');
const Connection = require('./database/connection');

const app = express();

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
let registrationFrom = new RegistrationFrom(new Credential(), new Profile(), new Connection());
app.set('Registration', new Registration(registrationFrom) );


module.exports = app;
