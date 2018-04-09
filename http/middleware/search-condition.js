const SearchIssueUser = require('../../src/search-services/search-issue-user');

module.exports = function (req, res, next) {
    req.condition = new SearchIssueUser(req.params.id);
    next();
};