class FeedbackController {


    showFeedback(req, res) {
        req.app.get('provider.feedback')
            .feedbackIssue(req.params.id).then((feedback)=>{
            res.send(feedback);
        });
    }

    createFeedback(req, res) {
        let promiseFeedback = req.app.get('repo.feedback').add(req.feedback);
        let promiseIssue = req.app.get('issues.repo').updateStatus(req.feedback.issue);
        Promise.all([promiseFeedback, promiseIssue]).then(()=>{
            res.send('Success!');
        }).catch(()=>{
            res.send('send false!');
        })

    }
}

module.exports = FeedbackController;
