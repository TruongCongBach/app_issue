class CommentRepository {

    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
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
