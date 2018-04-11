const connection = require('./database/connection');
const listTopic = require('./src/topic/topic-provider');
const factory = require('./src/commentator/make-from-db');
const Condition = require('./src/search-services/issue-topic');

let condition = new Condition(2);

const ProviderComment = require('./src/search-services/provider-comment');



const Posts = require('./src/news/posts');
const RepoNews = require('./src/news/repo-news');
const Issue = require('./src/issue/issue');
const User  = require('./src/user/user');


let issue = new Issue('dung cu nha truong qua yeu kem');
issue.setId(3);
let user = new User('asdsad', 'asdasd');
user.setId(2);
let posts = new Posts();
posts.setIssue(issue);
posts.setUser(user);

console.log(posts.getIssue().getId());

// new RepoNews(connection).addPosts(posts);
