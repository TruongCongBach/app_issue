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
            username     : registrationForm.getUser(),
            password     : encode(registrationForm.getPassword()),
            role :'member'
        }).then((user) => {
            return Connection('profiles').insert({
                user_id       : user[0],
                fullName      : registrationForm.getName(),
                address       : registrationForm.getAddress(),
                phone         : registrationForm.getPhone(),
                email         : registrationForm.getEmail(),
                dateOfBirth   : registrationForm.getBirth(),
                avatar        : registrationForm.getAvatar()
            })
        });
    }
}

module.exports = Registration;
