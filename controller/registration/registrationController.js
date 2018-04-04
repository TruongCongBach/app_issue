class RegistrationController {

    registration(req, res, next) {
        this.req.get('service').consume(req.registrationForm).then( user => {
            return res.json(user);
        })
    }
}

module.exports = RegistrationController;




class RegistrationService {


    consume(registrationForm) {

    }

}