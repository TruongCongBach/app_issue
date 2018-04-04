class Credential {

    /**
     *
     * @return {int} id
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {int} id
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
     * @param  {string} user
     */
    setUser(user) {
        this.user = user;
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
     * @param {string} password
     */
    setPassword(password) {
        this.password = password;
    }

}

module.exports = Credential;
