const connection = require('../database/connection');
const User = require('../src/user/user');
const RepoFeedback = require('../src/feed-back/feedback-reposytory');
const RepoIssue = require('../src/issue/repo-issue');
const Feedback = require('../src/feed-back/feed-back');
const Issue = require('../src/issue/issue');

let user = new User('username', 'password');
user.setId(21);
let issue = new Issue('noi dung cua van de kien nghi');
let feedback = new Feedback(issue, "van de cua ban dang duoc khac phuc");

issue.setId(10);
feedback.setUser(user);
console.log(feedback);
//
// let addFeedback = new RepoFeedback(connection).add(feedback);
//
// let updatIssue = new RepoIssue(connection).updateStatus(feedback.issue);
//
// Promise.all([addFeedback, updatIssue]).then(()=>{
//     console.log('Success!');
// });


