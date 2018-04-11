class ProviderComment {

    /**
     *
     * @param {Connection} connection
     * @param {object} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    /**
     *
     * @param issueId
     * @return {*|PromiseLike<void>|Promise<void>}
     */
    showCommentByIssue(issueId) {
        return this.connection('profiles')
            .innerJoin('comments', 'profiles.user_id', 'comments.user_id')
            .where({
                issue_id: issueId
            })
            .then(comment => comment.map(element => this.factory.makeFormCommentator(element)));
    }

}

module.exports = ProviderComment;