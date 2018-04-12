const Issue              = require('../issue/issue');
const ProfileProvider    = require('../profile/profile-provider');
const TopicProvider      = require('../topic/topic-provider');
const FactoryTopic       = require('../topic/factory-topic-db');


class MakeFormIssueReq {

    makeFormReq(req, res, next) {
        let topicProvider   = new TopicProvider(req.app.get('databaseConnection'), new FactoryTopic());
        let profileProvider = new ProfileProvider(req.app.get('databaseConnection'));
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
