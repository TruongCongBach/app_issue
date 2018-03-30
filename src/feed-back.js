class FeedBack {

    constructor(userId) {
        this.user_id = userId;
    }

    /**
     *
     * @param id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {number} id
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param issueId
     */
    setIssueId(issueId) {
        this.issueId = issueId
    }

    /**
     *
     * @return {number} issueId
     */
    getIssueId() {
        return this.issueId;
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
     * @param content
     */
    setContent(content) {
        this.content = content;
    }

    /**
     *
     * @return {string} content
     */
    getContent() {
        return this.content;
    }

    setDateTime(dateTime) {
        this.dateTime = dateTime;
    }

    getDateTime() {
        return this.dateTime;
    }



}
module.exports = FeedBack;