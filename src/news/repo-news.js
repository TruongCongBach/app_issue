class RepoNews {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Posts} posts
     */
    addPosts(posts){
        return this.connection('news').insert({
            issue_id: posts.getIssue(),
            user_id: posts.getUser()
        })
    }

}

module.exports = RepoNews;
