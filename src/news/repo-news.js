class RepoNews {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     * update colurm news values date
     * @params {int} issueId
     * @return {*}
     */
    addPosts(issueId){
        return this.connection('issues').update({
            news : new Date().toLocaleString()
        }).where({
            id : issueId
        })
    }

    /**
     *
     * @param issueId
     * @return {*}
     */
    delPosts(issueId){
        return this.connection('issues').update({
            archived_at: new Date().toLocaleString()
        }).where({
            id : issueId
        })
    }

}

module.exports = RepoNews;
