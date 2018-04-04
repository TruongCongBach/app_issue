class Profile {

    /**
     *
     * @param {date} date
     */
    setBirth(date) {
        this.birth = date;
    }

    /**
     *
     * @return {date}
     */
    getBirth() {
        return this.birth;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.user_id = id;
    }


    /**
     *
     * @return {string} user_id
     */
    getUser_id() {
        return this.user_id;
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @return {string} name
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
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
     * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
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
     * @param {string} avatar
     */
    setAvatar(avatar) {
        this.avatar = avatar;
    }

    /**
     *
     * @return {string} avatar
     */
    getAvatar() {
        return this.avatar;
    }
}

module.exports = Profile;
