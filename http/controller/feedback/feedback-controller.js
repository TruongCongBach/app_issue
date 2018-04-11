class FeedbackController {


    showFeedback(req, res, next) {
        req.app.get('provider.feedback')
            .feedbackIssue(req.params.id).then((feedback)=>{
            res.send(feedback);
        });
    }

    createFeedback(req, res, next) {
        let promiseFeedback = req.app.get('repo.feedback');
        let promiseIssue = req.app.get('issues.repo');
        promiseFeedback.add(req.feedback);
        promiseIssue.updateStatus(req.issue);
        Promise.all([promiseFeedback, promiseIssue]).then(() => {
            res.status(200).send({message: 'Success!'})
        })

    }
}

module.exports = FeedbackController;
