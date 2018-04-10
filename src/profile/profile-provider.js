const Profile = require('./profile');

class UserProvider {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    providerId(id) {
        return  this.connection.select().from('profiles').where({
            user_id : id,
        }).then((arrayProfile) => {
            if(arrayProfile.length === 0) {
                console.log('user khong ton tai');
            }
            let profile = new Profile();
            return profile.setProfile(arrayProfile);
        })
    }
}

module.exports = UserProvider;
