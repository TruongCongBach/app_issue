class Tester {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    User(username) {
        return this.connection.select().from('users').where({
            userName : username
        });
    }

    statusIssue(userId) {
        return this.connection.select().from('issues').where({
            user_id     : userId,
            status      : 'No process',
            archived_at : null
        })
    }

}
module.exports =  Tester;