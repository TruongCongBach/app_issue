class Comment {

    /**
     *
     * @param {number} userId
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
     * @param {number} issueId
     */
    setIssueId(issueId) {
        this.issueId = issueId;
    }

    /**
     *
     * @return {number} issueId
     */
    getIssueId() {
        return this.userId;
    }
}

module.exports = Comment;
