const Comment = require('./comment');

class FactoryComment {

    /**
     *
     * @param commentRaw
     */
    makeFromRequest(commentRaw) {
        let comment = new Comment();
        comment.setUserId(commentRaw.user_id);
        comment.setIssueId(commentRaw.issue_id);
        comment.setComment(commentRaw.comment);
        return comment;
    }


}

module.exports = FactoryComment;
