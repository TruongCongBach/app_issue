class FeedbackContronller {

    showFeedback(req, res, next) {
        req.app.get('provider.feedback')
            .feedbackIssue(req.params.id).then((feedback)=>{
            res.send(feedback);
        });
    }
}

module.exports = FeedbackContronller;
