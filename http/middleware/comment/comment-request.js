const CommentFactory = require('../../../src/comment/factory-comment');

module.exports = (req , res, next) => {
    let commentFactory = new CommentFactory();
    let comment = commentFactory.makeFromRequest(req.body);
    req.comment = comment;
    next();
};