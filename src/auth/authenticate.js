class Authenticate {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection, bcrypt) {
        this.connection = connection;
        this.bcrypt = bcrypt;
    }

    /**
     *
     * @param credential
     * @return {Promise<void>}
     */
    getcredeltial(credential) {

    }

    check(user) {
        return this.connection('users').where({
            user_id: user.getUserId()
        })
    }
    // req.session.username = result.getUsername();
    // req.session.role = result.getRole();
    // req.session.user_id = result.getUserId();

}
 module.exports = Authenticate;
