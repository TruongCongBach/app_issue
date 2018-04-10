class CommentController {


    showCommentByIssue(req, res, next) {
        req.app.get('listComment')
            .showCommentByIssue(req.params.issue_id)
            .then((listComment)=>{
                res.send(listComment);
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
