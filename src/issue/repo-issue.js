const connection = require('../../database/connection');
const Issue      = require('./issue');

class IssueRepository {

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
            content   : issue.getContent(),
            topic_id  : issue.topic.getId(),
            user_id   : issue.user.getUserId(),
            date_time : new Date().toLocaleString(),
            status    : 'No process'
        })

    }

    /**
     *
     * @param {int} id
     */
    delete(id) {
        return connection('issues').update({
            archived_at : new Date().toLocaleString()
        }).where({
            id      : id,
        })
    }




}

module.exports = IssueRepository;
