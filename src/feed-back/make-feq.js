const Issue = require('../issue/issue');
const Feedback = require('../feed-back/feed-back');
const User = require('../user/user');
const ProviderUser = require('../user/user-provider');
const ProviderIssue = require('../issue/issue-provider');


class MakeFormFeedback {

    makeReq(feedbackRaw) {
        let user = ProviderUser(feedbackRaw.user_id);
        let issue = ProviderIssue(feedbackRaw.issue_id);
        return Promise.all([user, issue]).then((arrayUserIssue)=>{
             let feedback = new Feedback(arrayUserIssue[1], feedbackRaw.content)
                 feedback.setUser(arrayUserIssue[0]);
            return feedback;
         })
    }
}

module.exports = MakeFormFeedback;