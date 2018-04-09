class RegistrationController {

    registration(req, res, next) {
        req.app.get('registration').register(req.registrationForm).then(()=>{
            res.send('dang ky thanh cong');
        })
    }
}

module.exports = RegistrationController;




