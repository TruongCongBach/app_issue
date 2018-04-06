const Profile = require('./profile');
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
        return Connection.select().from('profiles').where({
            user_id : id,
        }).then((arrayProfile) => {
            let profile = new Profile();
            return profile.setProfile(arrayProfile);
        })
    }
}

module.exports = UserProvider;
