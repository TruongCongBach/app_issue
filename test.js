const connection = require('./database/connection');
const listTopic = require('./src/topic/topic-provider');
const factory = require('./src/issue/factory-issue-db');
const Condition = require('./src/search-services/issue-topic');

let condition = new Condition(2);

const Searcher = require('./src/search-services/searcher');
new Searcher(connection, new factory()).searchCondition(condition).then((arrayIssue)=>{
    console.log(arrayIssue);
});

