const User = require('../src/user');
class Profile {

    /**
     * 
     * @param {User} user
     */
    constructor(user) {
        this.user = user;
    }

    /**
     * 
     * @param {string} name
     */
    setFullName(name) {
        this.fullName = name;
    }

    /**
     * 
     * @return {string} fullName
     */
    getFullName() {
        return this.fullName;
    }
    
    /**
     *
     * @param {date} date
     */
    setDateOfBirth(date) {
        this.date = date;
    }

    /**
     *
     * @return {date} date
     */
    getDateOfBirth() {
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

    /**
     * 
     * @param {string} link
     */
    setAvatar(link) {
        this.link = link;
    }


    /**
     * 
     * @return {string} link
     */
    getAvatar() {
        return this.link;
    }
}

module.exports = Profile;

