const Profile = require('../src/profile');
class User {

    constructor(user, password) {
        this.user = user;
        this.password = password;
    }


    /**
     *
     * @param {string} user
     */
    setUser(user) {
        this.user = user;
    }

    /**
     *
     * @param {string} password
     */
    setPassword(password) {
        this.password = password;
    }


    /**
     *
     * @return {string} user
     */
    getUser() {
        return this.user;
    }

    /**
     *
     * @return {string} password
     */
    getPassword() {
        return this.password;
    }

    /**
     *
     * @param str = 'admin' || str = 'member'
     */
    setRole(str) {
        this.role = str;
    }

    getRole() {
        return this.role;
    }

    /**
     *
     * @param {Profile} profile
     */
    setProfile(profile) {
        this.profile = profile;
    }

    /**
     *
     * @return {Profile}
     */
    getProfile() {
        return this.profile;
    }

}

module.exports = User;
