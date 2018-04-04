const connection = require('../../database/connection');
const Issue      = require('./issue');

class BankIssue {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Issue} issue
     * @return {Promise <void>}
     */
    addIssue(issue) {
        return connection('issues').insert({
            topic_id  : issue.topic.getId(),
            content   : issue.getContent(),
            user_id   : issue.user.getId(),
            date_time : new Date().toLocaleString(),
            status_id : issue.status.getId(),
        })

    }

    /**
     *
     * @param {Issue} issue
     */
    editIssue(issue) {
        return connection('issues').update({
            topic_id : issue.topic.getId(),
            content  : issue.getContent(),

        }).where({
            user_id : issue.user.getId(),
            id      : issue.id,
        })
    }

    /**
     *
     * @param {Issue} issue
     */
    deleteIssue(issue) {
        return connection('issues').update({
            delete_at : new Date().toLocaleString()
        }).where({
            user_id : issue.user.getId(),
            id      : issue.getId(),
        })
    }

}

module.exports = BankIssue;
