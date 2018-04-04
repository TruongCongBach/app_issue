const Connection = require('../../database/connection');
const encode = require('../bcryt/encode');

class Registration {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Object} registrationForm
     */
    register(registrationForm) {
        return Connection('users').insert({
            user     : registrationForm.getUser(),
            password : encode(registrationForm.getPassword())
        }).then((user) => {
            return Connection('profiles').insert({
                user_id : user[0],
                name    : registrationForm.getName(),
                address : registrationForm.getAddress(),
                phone   : registrationForm.getPhone(),
                email   : registrationForm.getEmail(),
                birth   : registrationForm.getBirth(),
                avatar  : registrationForm.getAvatar()
            })
        });
    }
}

module.exports = Registration;
