const connection = require('./database/connection');
const listTopic = require('./src/topic/topic-provider');
const factory = require('./src/commentator/make-from-db');
const Condition = require('./src/search-services/issue-topic');

let condition = new Condition(2);

const ProviderComment = require('./src/search-services/provider-comment');

new ProviderComment(connection, new factory()).showCommentByIssue(1).then((arrayComment)=>{
    console.log(arrayComment);
});