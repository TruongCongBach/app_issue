class CommentController {


    showCommentByIssue(req, res, next) {
        let searcher = req.app.get('issue.searcher')
            .searchCondition(req.condition);
        let comment = req.app.get('listComment')
            .showCommentByIssue(req.params.issue_id);
        Promise.all([searcher, comment]).then((arrayIssueComment)=>{
            res.json(arrayIssueComment);
        })
    }

    createComment(req, res, next) {
        let repo = req.app.get('comment.repo');
        repo.add(req.comment).then(() => {
            res.status(200).send({message: 'Success!'})
        }).catch(next)
    }

}

module.exports = CommentController;
