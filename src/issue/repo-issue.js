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
        return this.connection('issues').insert({
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
        return this.connection('issues').update({
            archived_at : new Date().toLocaleString()
        }).where({
            id : id
        })
    }

    /**
     *
     * @param {object} issue
     * @return {Promise<void>}
     */
    updateStatus(issue) {
        return this.connection('issues').update({
            status: 'processed',
        }).where({
            id : issue.getId()
        })
    }




}

module.exports = IssueRepository;
