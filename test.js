const connection = require('./database/connection');
const listTopic = require('./src/topic/topic-provider');
const factory = require('./src/commentator/make-from-db');
const Condition = require('./src/search-services/issue-topic');

const FactoryIssueDB = require('./src/issue/factory-issue-db');
let condition = new Condition(2);

const ProviderComment = require('./src/search-services/provider-comment');



const Posts = require('./src/news/posts');
const RepoNews = require('./src/news/repo-news');
const Issue = require('./src/issue/issue');
const User  = require('./src/user/user');

const Searcher = require('./src/search-services/searcher');
new Searcher(connection, new FactoryIssueDB).searchCondition(condition).then(console.log);