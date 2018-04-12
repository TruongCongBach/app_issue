const IssueRepo         = require('./repo-issue');
const Factory           = require('./factory-issue-db');
const Searcher          = require('./search-services/searcher');
const ProviderFeedback  = require('./search-services/feedback-by-issue_id');
//todo code ngu vklz
module.exports = function (app) {
    app.set('provider.feedback', new ProviderFeedback(app.get('databaseConnection')));
    app.set('issues.repo', new IssueRepo(app.get('databaseConnection')));
    app.set('issue.searcher', new Searcher(app.get('databaseConnection'), new Factory()));
};