const Feedback = require('../feed-back/feed-back');

class ProviderFeedback {

    /**
     *
     * @param connection
     */
    constructor(connection){
        this.connection = connection;
    }

    /**
     *
     * @param issueId
     * @return {Feedback}
     */
    feedbackIssue(issueId) {
        return this.connection.select().from('feedbacks').where({
            issue_id: issueId,
            delete_at: null
        }).then(arrayFeedback => {
            let feedback = new Feedback(arrayFeedback[0].issue_id, arrayFeedback[0].content);
               feedback.setDate(arrayFeedback[0].date_time);
               return feedback
        })
    }
}

module.exports = ProviderFeedback;