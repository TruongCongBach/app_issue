const RepoNews          = require('../news/repo-news');
const FeedbackRepo      = require('../feed-back/feedback-reposytory');

module.exports = function (app) {
    app.set('news.repo', new RepoNews(app.get('databaseConnection')));
    app.set('repo.feedback', new FeedbackRepo(app.get('databaseConnection')));
};