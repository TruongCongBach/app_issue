const CommentRepo       = require('../comment/repo-comment');
const FactoryComment    = require('../commentator/make-from-db');
const ProviderComment   = require('../issue/search-services/provider-comment');
module.exports = function (app) {
    app.set('comment.repo', new CommentRepo(connection));
    app.set('listComment', new ProviderComment(connection, new FactoryComment()));
};