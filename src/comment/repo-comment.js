class CommentRepository {

    /**
     *
     * @param {connection} connection
     * @param {Comment} comment
     */
    constructor(connection, comment) {
        this.connection = connection;
        this.comment    = comment;
    }

    /**
     *
     * @param {Comment} comment
     * @return {Promise<void>}
     */
    add(comment) {
        return this.connection('comments').insert({
            user_id : comment.getUserId(),
            issue_id: comment.getIssueId(),
            comment : comment.getComment()
        })
    }

}

module.exports = CommentRepository;
