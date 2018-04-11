class FeedbackRepository {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {object} feedback
     * @return {Promise<void>}
     */
    add(feedback) {
        return this.connection('feedbacks').insert({
            issue_id  : feedback.getIssue().getId(),
            user_id   : feedback.user.getId(), //admin
            content   : feedback.getContent(),
            date_time : new Date(),
            delete_at : null
        })
    }
}

module.exports = FeedbackRepository;