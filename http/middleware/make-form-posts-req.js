const Posts = require('../../src/news/posts');

module.exports = function (req, res, next) {
    let posts = new Posts();
    posts.setUser(req.body.user_id);
    posts.setIssue(req.body.issue_id);
    req.posts = posts;
    next();
};
