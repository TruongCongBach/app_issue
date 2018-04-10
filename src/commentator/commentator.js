class Commentator {

    /**
     *
     * @param profile
     */
    constructor(profile) {
        this.profile = profile;
    }

    /**
     *
     * @return {object} profile
     */
    getProfile() {
        return this.profile;
    }

    /**
     *
     * @param {string} comment
     */
    setComment(comment) {
        this.comment = comment;
    }

    /**
     *
     * @return {string} comment
     */
    getComment() {
        return this.comment;
    }

}

module.exports = Commentator;
