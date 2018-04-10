class CommentController {
    createComment(req, res, next) {
        let repo = req.app.get('comment.repo');
        repo.add(req.comment).then(() => {
            res.status(200).send({message: 'Success!'})
        }).catch(next)
    }
}

module.exports = CommentController;
