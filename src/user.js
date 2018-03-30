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
    }

    /**
     *
     * @param id
     */
    setId(id) {
        this.id = id;
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
     * @param user
     */
    setUser(user) {
        this.user = user;
    }

    /**
     *
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
    }

    /**
     *
     * @return {string} role
     */
    getRole() {
        return this.role;
    }

    /**
     *
     * @param role
     */
    setRole(role) {
        this.role = role;
    }

}
module.exports = User;