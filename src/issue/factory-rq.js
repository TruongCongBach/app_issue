const Issue              = require('../issue/issue');
const searchContentTopic = require('../search-services/topic-by-id');
const searchUserId       = require('../search-services/user-by-id');
const Topic              = require('../topic/topic');
const User               = require('../user/user');
const ProfileProvider       = require('../profile/profile-provider');
const Connection         = require('../../database/connection');
const TopicProvider      = require('../topic/topic-provider');

let profileProvider = new ProfileProvider(Connection);
let topicProvider = new TopicProvider(Connection);

class MakeFormIssueReq {

    /**
     *
     * @param issueRaw
     * @return {Issue} issue
     */
    makeFormReq(issueRaw) {

        let arrayTopic = topicProvider.providerId(issueRaw.topic_id);
        let arrayProfile = profileProvider.providerId(issueRaw.user_id);

        let issue = Promise.all([arrayTopic, arrayProfile])
                .then((userTopic) => {
                   let issue = new Issue(issueRaw.content);
                    issue.setUser(userTopic[1]);
                    issue.setTopic(userTopic[0]);
                    return issue;
                });
        return issue;

    }
}

module.exports = MakeFormIssueReq;