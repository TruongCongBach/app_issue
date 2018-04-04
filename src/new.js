const User = require('../src/user');
const Issue = require('../src/issue/issue');

class New{
    /**
     *
     * @param {Issue} issue
     */
    setIssueId(issue) {
        this.issue = issue
    }

    /**
     *
     * @return {Issue} issue
     */
    getIssueId() {
        return this.issue;
    }

    /**
     *
     * @param  {User} user
     */
    setUer(user) {
        this.user = user;
    }

    /**
     *
     * @return {User} user
     */
    getUser() {
        return this.user;
    }

}
module.exports = New;