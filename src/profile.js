<<<<<<< HEAD
class Profile {

    constructor(name) {
        this.name = name;
=======
class profile {
    constructor(userId) {
        this.userId = userId;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param {date} date
     */
    setBirth(date) {
        this.date = date;
=======
     * @param userId
     */
    setUserId(userId) {
        this.userId = userId;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @return {date} date
     */
    getBirth() {
        return this.date;
=======
     * @return {number} userId
     */
    getUserId() {
        return this.userId;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
=======
     * @param name
     */
    setName(name) {
        this.name = name;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @return {string} email
     */
    getEmail() {
        return this.email;
=======
     * @param name
     * @return {string} name
     */
    getName(name) {
        return this.name;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @return {string} phone
     */
    getPhone() {
        return this.phone;
=======
     * @param address
     */
    setAddress(address) {
        this.address = address;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
      * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
=======
     * @return {string} address
     */
    getAddress() {
        return this.address;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @param {string} address
     */
    setAddress(address){
        this.address = address;
=======
     * @param avatar
     */
    setAvatar(avatar) {
        this.avatar = avatar;
>>>>>>> dev
    }

    /**
     *
<<<<<<< HEAD
     * @return {string} address
     */
    getAddress() {
        return this.address;
    }

}

module.exports = Profile;
=======
     * @return {string} avatar
     */
    getAvatar() {
        return this.avatar;
    }
}
module.exports = profile;
>>>>>>> dev
