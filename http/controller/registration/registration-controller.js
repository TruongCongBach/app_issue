class RegistrationController {

    registration(req, res, next) {
        req.app.get('registration').register(req.registrationForm).then(()=>{
            res.send('Success!');
        })
    }
}

module.exports = RegistrationController;




