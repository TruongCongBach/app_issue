class Registration {

    /**
     *
     * @param {object} bcrypt
     * @param {Connection} connection
     */
    constructor(connection, bcrypt) {
        this.connection = connection;
        this.bcrypt     = bcrypt;
    }
    /**
     *
     * @param {Object} registrationForm
     */
    register(registrationForm) {
        let salt = this.bcrypt.genSaltSync(10);
        return this.connection('users').insert({
            username : registrationForm.getCredential().getUser(),
            password : this.bcrypt.hashSync(registrationForm.getCredential().getPassword(), salt),
            role     :'member'
        }).then((user) => {
            return this.connection('profiles').insert({
                user_id       : user[0],
                fullName      : registrationForm.getProfile().getName(),
                address       : registrationForm.getProfile().getAddress(),
                phone         : registrationForm.getProfile().getPhone(),
                email         : registrationForm.getProfile().getEmail(),
                dateOfBirth   : registrationForm.getProfile().getBirth(),
                avatar        : registrationForm.getProfile().getAvatar()
            })
        });
    }
}

module.exports = Registration;
