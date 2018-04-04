const Feedback = require('../src/feed-back/feed-back');
const Issue    = require('../src/issue/issue');
const Topic    = require('../src/topic');
const User     = require('../src/user');
const FeedBack = require('../src/feed-back/feed-back');
const MakeFormIsssueReq = require('../src/issue/factory-rq');
const BankIssue = require('../src/issue/bank-issue');
const Connection = require('../database/connection');

let myAccount = new User('bach','1');

let contentFeedback = 'noi dung cua content';
let topicIssue = 'chu de cua issue';
let status ='da gui thanh cong';

//test connect
// new BankIssue(connection).showIssue().then(function (listIssue) {
//     console.log(listIssue);
// });

let myIssueRaw = {
    topic_id : 1,
    content : 'noi dung cua issue 2',
    user : 2

};


//test registraion

/*const Profile = require('../src/registration-sevice/registration-form/profile');
const Credential = require('../src/registration-sevice/registration-form/credential');
let myCredential = new Credential();
myCredential.setUser('bach');
myCredential.setPassword('bach');
myCredential.setId(113);

let myProfile = new Profile();
myProfile.setAddress('vaan noi');
myProfile.setName('bach');
myProfile.setBirth('1996/10/30');
myProfile.setPhone('0932332432');

const RegistrationFrom = require('../src/registration-sevice/registration-form/registration-form');
let regFrom = new RegistrationFrom(myCredential, myProfile);

const Registration = require('../src/registration-sevice/registration');
new Registration(Connection).register(regFrom);*/

//test issue
// let content ='noi dung issue';
// let contentTopic = 'title';
// let topic = new Topic(contentTopic);
// topic.setId(1);
//
// let issue = new Issue(topic, content);
// console.log(issue.topic.getContent());

// new MakeFormIsssueReq().makeFormReq(myIssueRaw).then(function (myIssue) {
//
// });

