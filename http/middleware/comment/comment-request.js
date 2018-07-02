const CommentFactory = require('../../../src/comment/factory-comment');

module.exports = (req , res, next) => {
    let commentFactory = new CommentFactory();
    req.comment = commentFactory.makeFromRequest(req.body);
    next();
};