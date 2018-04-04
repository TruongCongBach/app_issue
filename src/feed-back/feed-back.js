const Issue = require('../issue/issue');
const User = require('../user');

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


}

module.exports = FeedBack;
