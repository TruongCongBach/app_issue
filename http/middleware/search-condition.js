const SearchIssueUser = require('../../src/search-services/search-issue-user');
const SearchIssueTopic = require('../../src/search-services/issue-topic');
const SearchIssueStatus = require('../../src/search-services/status-issues');

module.exports = function (req, res, next) {
    req.condition = makeCondition(req);
    next();
};

    function makeCondition(req) {
        if(req.path.toString().startsWith('/myIssue/')){
            return new SearchIssueUser(req.params.id);
        }
        if(req.path.toString().startsWith('/showIssueInNews/')){
            return new SearchIssueTopic(req.params.topicId);
        }
        if(req.path.toString().startsWith('/listIssues')){
            return new SearchIssueStatus();
        }
    }