class CommentController {


    showCommentByIssue(req, res, next) {
        req.app.get('listComment')
            .showCommentByIssue(req.params.issue_id)
            .then((listComment)=>{
                res.send(listComment);
            })
    }

}

module.exports = CommentController;
