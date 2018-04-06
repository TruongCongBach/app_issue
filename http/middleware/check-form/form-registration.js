const TesterUser = require('../validator/username-in-data');

let testerUser = new TesterUser();

module.exports = function (req, res, next) {
    //check user is not
    testerUser.checkUser(req.body.user).then((arrayUser)=>{
        if(arrayUser.length === 0) {

            let registrationForm = req.app.get('registrationForm');
            registrationForm.setFormData(req.body);

            req.registrationForm = registrationForm;
            next();
        }
            res.send('user dang ton tai');

    });
};