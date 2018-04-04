class User {

    /**
     *
     * @param {string} userName
     * @param {string} password
     */
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }

    /**
     *
     * @return {int} id
     */
    getId(){
        return this.id;
    }

    /**
     *
     * @param {string} userName
     */
    setUserName(userName) {
        this.userName = userName;
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
    getUserName() {
        return this.userName;
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

    /**
     *
     * @return {string} role
     */
    getRole() {
        return this.role;
    }

    /**
     *
     * @param {int} id
     */
    setId(id){
        this.id = id;
    }

    /**
     *
     * @param array
     * @return {User}
     */
    setUser(array) {
        this.setUserName(array.user);
        this.setId(array.id);
        this.setPassword(array.password);
        this.setRole(array.role);
        return User;
    }
}

module.exports = User;
