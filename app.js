const express           = require('express');
const path              = require('path');
const cookieParser      = require('cookie-parser');
const logger            = require('morgan');
const nunjucks          = require('nunjucks');

let indexRouter         = require('./routes/index');
let usersRouter         = require('./routes/users');
const RegistrationForm  = require('./src/registration-sevice/registration-form/registration-form');
const Credential        = require('./src/registration-sevice/registration-form/credential');
const Profile           = require('./src/registration-sevice/registration-form/profile');
const Registration      = require('./src/registration-sevice/registration');
const connection        = require('./database/connection');
const IssueRepo         = require('./src/issue/repo-issue');
const Searcher          = require('./src/search-services/searcher');
const Factory           = require('./src/issue/factory-issue-db');
const Tester            = require('./http/middleware/tester/tester');
const bcrypt            = require('bcrypt');
const ListTopic         = require('./src/topic/topic-provider');
const FactoryTopic      = require('./src/topic/factory-topic-db');
const FactoryComment    = require('./src/commentator/make-from-db');
const ProviderComment   = require('./src/search-services/provider-comment');
const RepoNews          = require('./src/news/repo-news');

const app               = express();

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

const ProviderFeedback = require('./src/search-services/feedback-by-issue_id');
app.set('middle.tester', new Tester(connection));
app.set('issues.repo', new IssueRepo(connection));
app.set('registrationForm', new RegistrationForm(new Credential(), new Profile(), connection));
app.set('registration', new Registration(connection, bcrypt));
app.set('issue.searcher', new Searcher(connection, new Factory()));
app.set('provider.feedback', new ProviderFeedback(connection));
app.set('listTopic', new ListTopic(connection, new FactoryTopic()));
app.set('listComment', new ProviderComment(connection, new FactoryComment()));
app.set('news.repo', new RepoNews(connection));

module.exports = app;
