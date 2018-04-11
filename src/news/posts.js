class Posts {

    /**
     *
     * @param {Issue} issue
     */
    setIssue(issue) {
        this.issue = issue;
    }

    /**
     *
     * @return {Issue}
     */
    getIssue() {
        return this.issue;
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
     * @return {User} user
     */
    getUser() {
        return this.user;
    }
}

module.exports = Posts;
