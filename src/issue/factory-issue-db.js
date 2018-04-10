const Issue = require('../issue/issue');
const Topic = require('../topic/topic');



class FactoryIssueDB {

    /**
     *
     * @param {object} issue
     * @return {Issue}
     */
    makeFormIssueDB(issue) {
        let topic = new Topic(issue.name);
        topic.setId(issue.topic_id);
        let myIssue = new Issue(issue.content);
        myIssue.setRate(issue.point_rate);
        myIssue.setDateTime(issue.date_time);
        myIssue.setStatus(issue.status);
        myIssue.setId(issue.id);
        return myIssue;

    }
}

module.exports = FactoryIssueDB;