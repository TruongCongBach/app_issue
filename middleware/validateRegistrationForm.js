const Credential = require('../src/registration-sevice/registration-form/credential');
const Profile = require('../src/registration-sevice/registration-form/profile');
const RegistrationForm = require('../src/registration-sevice/registration-form/registration-form');
const connection = require('../database/connection');
module.exports = function (req, res, next) {
    let credential = new Credential();
    let profile = new Profile();
    let registrationForm = new RegistrationForm(credential, profile, connection);

    // DO validate form data that sent by request
    registrationForm.setFormData(req.body);
    if (registrationForm.isInvalid(registrationForm)) {
        console.log('false');
        return res.json(registrationForm.getInvalids())
    }
    console.log(registrationForm);

    req.registrationForm = registrationForm;
    // next();
};