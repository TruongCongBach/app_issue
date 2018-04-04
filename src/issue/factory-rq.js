const Issue              = require('../issue/issue');
const Topic              = require('../topic');
const searchContentTopic = require('../search-services/topic-by-id');
const Status             = require('../status');
const searchStatus       = require('../search-services/status-by-id');
const searchUserId       = require('../search-services/user-by-id');
const User               = require('../user');

class MakeFormIssueReq {

    /**
     *
     * @param issueRaw
     * @return {Issue} issue
     */
    makeFormReq(issueRaw) {

        let myIssue = new Issue(issueRaw.topic_id, issueRaw.content);
            myIssue.setId(issueRaw.id);
        let status = new Status();
            status.setId(1);
        let topic = new Topic();
        let user = new User();
        let myUser = searchUserId(issueRaw.user);
        let myStatus = searchStatus(status.getId());
        let myTopic = searchContentTopic(issueRaw.topic_id);

        let make = Promise.all([myStatus, myTopic, myUser])
            .then(function (information) {

                status.setStatus(information[0][0]);
                topic.setTopic(information[1][0]);
                user.setUser(information[2][0]);

                myIssue.setStatus(status);
                myIssue.setTopic(topic);
                myIssue.setUser(user);
                return myIssue;
            });
        return make;
    }
}

module.exports = MakeFormIssueReq;