const RepoNews          = require('../news/repo-news');
const FeedbackRepo      = require('../feed-back/feedback-reposytory');

module.exports = function (app) {
    app.set('news.repo', new RepoNews(connection));
    app.set('repo.feedback', new FeedbackRepo(connection));
};