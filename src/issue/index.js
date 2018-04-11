const IssueRepo         = require('./repo-issue');
const Factory           = require('./factory-issue-db');
const Searcher          = require('./search-services/searcher');
const ProviderFeedback  = require('./search-services/feedback-by-issue_id');
//todo code ngu vklz
module.exports = function (app) {
    app.set('provider.feedback', new ProviderFeedback(connection));
    app.set('issues.repo', new IssueRepo(connection));
    app.set('issue.searcher', new Searcher(connection, new Factory()));
};