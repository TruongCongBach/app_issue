const validator = require('validator');
module.exports = function (req, res, next) {
    //check user is not
    let tester = req.app.get('middle.tester');
        tester.User(req.body.user).then((arrayUser)=>{
            if(!validator.isEmail(req.body.email)) {
                return res.send('email false');
            }
            if(arrayUser.length === 0) {
                let registrationForm = req.app.get('registrationForm');
                registrationForm.setFormData(req.body);
                req.registrationForm = registrationForm;
                next();
            } else {
                res.send('user dang ton tai hoac email');
            }
    });
};