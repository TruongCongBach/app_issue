class Profile {

    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @param {date} date
     */
    setBirth(date) {
        this.date = date;
    }

    /**
     *
     * @return {date} date
     */
    getBirth() {
        return this.date;
    }

    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     *
     * @return {string} email
     */
    getEmail() {
        return this.email;
    }

    /**
     *
     * @return {string} phone
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
      * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address){
        this.address = address;
    }

    /**
     *
     * @return {string} address
     */
    getAddress() {
        return this.address;
    }

}

module.exports = Profile;
