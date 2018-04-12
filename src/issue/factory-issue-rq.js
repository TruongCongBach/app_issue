const Issue              = require('../issue/issue');
const ProfileProvider    = require('../profile/profile-provider');
const Connection         = require('../../database');
const TopicProvider      = require('../topic/topic-provider');
const FactoryTopic       = require('../topic/factory-topic-db');

let profileProvider = new ProfileProvider(Connection);
let topicProvider   = new TopicProvider(Connection, new FactoryTopic());

class MakeFormIssueReq {

    makeFormReq(req, res, next) {
        let arrayTopic   = topicProvider.providerId(req.body.topic_id);
        let arrayProfile = profileProvider.providerId(req.body.user_id);
        Promise.all([arrayTopic, arrayProfile])
            .then((userTopic) => {
                let issue = new Issue(req.body.content);
                issue.setUser(userTopic[1]);
                issue.setTopic(userTopic[0]);
                req.issue = issue;
                next();
            });

    }
}

module.exports = MakeFormIssueReq;
