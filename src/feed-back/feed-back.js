const Issue = require('../issue/issue');
const User = require('../user/user');

class FeedBack {

    /**
     *
     * @param {Issue} issue
     * @param {string} content
     */
    constructor(issue, content) {
        this.issue = issue;
        this.content = content;
    }

    /**
     *
     * @return {Issue} issue
     */
    getIssue() {
        return this.issue;
    }

    /**
     *
     * @return {string} content
     */
    getContent() {
        return this.content;
    }

    /**
     *
     * @param {User} user
     */
    setUser(user) {
        this.user = user;
    }

    /**
     *
     * @param date
     */
    setDate(date) {
        this.date = date;
    }

    /**
     *
     * @return {string} date
     */
    getDate() {
        return this.date;
    }

}

module.exports = FeedBack;
