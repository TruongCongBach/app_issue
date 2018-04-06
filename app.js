const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require('nunjucks');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
const RegistrationForm = require('./src/registration-sevice/registration-form/registration-form');
const Credential = require('./src/registration-sevice/registration-form/credential');
const Profile = require('./src/registration-sevice/registration-form/profile');
const Registration = require('./src/registration-sevice/registration');
const connection = require('./database/connection');
const IssueRepo = require('./src/issue/repo-issue');
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


app.set('issues.repo', new IssueRepo(connection));
app.set('registrationForm', new RegistrationForm(new Credential(), new Profile(), connection));
app.set('registration', new Registration(connection));


module.exports = app;
