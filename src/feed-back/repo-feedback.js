class RepoFeedback {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    add(feedback) {
        return this.connection('feedback').insert({
            issue_id : feedback.getIssue().getId(),
            user_id : feedback.getUserId(),
            content : feedback.getContent()
        })
    }

}

module.exports = RepoFeedback;
