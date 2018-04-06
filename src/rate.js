const User = require('./user/user');

class Rate {

    /**
     *
     * @param {User} user
     */
    setUser(user) {
        this.user = user;
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
     * @return {int} id
     */
    getId() {
        return this.id;
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

    /**
     *
     * @param {int} point
     */
    setPointVote (point) {
        this.point = point;
    }

    /**
     *
     * @return {int} point
     */
    getPointVote() {
        return this.point;
    }
}

module.exports = Rate;
