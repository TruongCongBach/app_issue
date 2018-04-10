class Profile {

    /**
     *
     * @param id
     */
setUserId(id) {
        this.user_id = id;
    }

    /**
     *
     * @return {*}
     */
    getUserId() {
        return this.user_id;
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
     * @param {*} date
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

    /**
     *
     * @param array
     * @return {Profile} profile
     */
    setProfile(array) {
        let profile = new Profile();
        profile.setUserId(array[0].user_id);
        profile.setFullName(array[0].fullName);
        profile.setAddress(array[0].address);
        profile.setPhone(array[0].phone);
        profile.setEmail(array[0].email);
        profile.setDateOfBirth(array[0].dateOfBirth);
        profile.setAvatar(array[0].avatar);
        return profile;

    }
}

module.exports = Profile;

