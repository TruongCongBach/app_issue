class profile {
    constructor(userId) {
        this.userId = userId;
    }

    /**
     *
     * @param userId
     */
    setUserId(userId) {
        this.userId = userId;
    }

    /**
     *
     * @return {number} userId
     */
    getUserId() {
        return this.userId;
    }

    /**
     *
     * @param name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @param name
     * @return {string} name
     */
    getName(name) {
        return this.name;
    }

    /**
     *
     * @param address
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
     * @param avatar
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
module.exports = profile;