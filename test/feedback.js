//test feedback
const Feedback = require('../src/feed-back/feed-back');
const Issue    = require('../src/issue/issue');
const Topic    = require('../src/topic/topic');
const User     = require('../src/user/user');
const FeedBack = require('../src/feed-back/feed-back');
const MakeFormIsssueReq = require('../src/issue/factory-rq');
const BankIssue = require('../src/issue/repo-issue');
const Connection = require('../database/connection');

let myAccount = new User('bach','1');

let contentFeedback = 'noi dung cua content';
let topicIssue = 'chu de cua issue';
let status ='da gui thanh cong';

let myIssue = {
    id:18,
    topic_id : 1,
    content : 'noi dung cua issue 2',
    user : 2

};


