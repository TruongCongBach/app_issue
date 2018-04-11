const connection = require('../database/connection');


// new ListIssue(Connection).showIssue(1).then((issue) => {
//     console.log(issue);
// });

const Searcher = require('../src/issue/search-services/searcher');
const Factory = require('../src/issue/factory-issue-db');
let factory = new Factory();


let searcher = new Searcher(connection, factory);
searcher.searchIssueFeedback().then((arrayIssueUser)=>{
    console.log(arrayIssueUser);
});

