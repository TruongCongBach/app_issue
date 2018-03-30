<<<<<<< HEAD
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
=======
class User {

    /**
     *
     * @param user
     */
    constructor(user) {
        this.user = user;
    }

    /**
     *
     * @return {number} id
     */
    getId() {
        return this.id;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param {string} password
     */
    setPassword(password) {
        this.password = password;
    }


=======
     * @param id
     */
    setId(id) {
        this.id = id;
    }

>>>>>>> dev
    /**
     *
     * @return {string} user
     */
    getUser() {
        return this.user;
    }

    /**
     *
<<<<<<< HEAD
     * @return {string} password
     */
    getPassword() {
        return this.password;
=======
     * @param user
     */
    setUser(user) {
        this.user = user;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param str = 'admin' || str = 'member'
     */
    setRole(str) {
        this.role = str;
    }

    getRole() {
        return this.role;
=======
     * @return {string} pass
     */
    getPass() {
        return this.pass;
    }

    /**
     *
     * @param pass
     */
    setPass(pass) {
        this.pass = pass;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param {Profile} profile
     */
    setProfile(profile) {
        this.profile = profile;
=======
     * @return {string} role
     */
    getRole() {
        return this.role;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @return {Profile}
     */
    getProfile() {
        return this.profile;
    }

}

module.exports = User;
=======
     * @param role
     */
    setRole(role) {
        this.role = role;
    }

}
module.exports = User;
>>>>>>> dev
