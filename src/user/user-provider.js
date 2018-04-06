const User = require('./user');
const Connection = require('../../database/connection');

class UserProvider {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    providerId(id) {
        return Connection.select().from('users').where({
            id : id,
        }).then((arrayUser) => {
            let user = new User(arrayUser[0].username, arrayUser[0].password);
                user.setId(arrayUser[0].id);
                user.setRole(arrayUser[0].role);
            return user;
        })
    }
}

module.exports = UserProvider;
