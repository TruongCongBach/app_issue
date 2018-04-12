const Credential        = require('../registration-sevice/registration-form/credential');
const Profile           = require('../registration-sevice/registration-form/profile');
const RegistrationForm  = require('../registration-sevice/registration-form/registration-form');
const Registration      = require('../registration-sevice/registration');
const bcrypt            = require('bcrypt');

module.exports = function (app) {
    app.set('registration', new Registration(app.get('databaseConnection'), bcrypt));
    app.set('registrationForm', new RegistrationForm(new Credential(), new Profile(), app.get('databaseConnection')));
};