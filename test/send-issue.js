const MakeFormIsssueReq = require('../src/issue/factory-issue-rq');
const RepoIssue         = require('../src/issue/repo-issue');
const connection        = require('../database/connection');
const Vaildator         = require('../http/middleware/check-form/form-send-issue');

let issueRaw = {
    topicId: 1,
    content : '',
    user : 1,
};
let checkFrom = new Vaildator().checkFormIssue(issueRaw);

if (checkFrom) {
    new MakeFormIsssueReq().makeFormReq(issueRaw).then((issue)=> {
       new RepoIssue(connection).addIssue(issue).then(()=>{
           console.log('thanh cong');
       }).catch((error) => {
           console.log('loi'+ error);
       });
    });
}
console.log('data gui loi');