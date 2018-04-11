const Feedback = require('./feed-back');
const Issue    = require('../issue/issue');
class FeedbackFactory {
    makeFormRequest(feedbackRaw) {
        let issue   = new Issue(feedbackRaw.content);
        let feedback = new Feedback(issue,)
    }
}
module.exports = FeedbackFactory;