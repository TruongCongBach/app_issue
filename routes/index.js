const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../http/middleware/index');
const Controller             = require('../http/controller/index');

let checkComment  = [superCheck.checkComment, superCheck.commentRequest];
let issue         = new Controller.issueControler();
let registration  = new Controller.registration();
let feedback      = new Controller.feedbackContronler();
let topic         = new Controller.TopicContronler();
let comment       = new Controller.CommentContronler();
let news          = new Controller.NewsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//member
router.post('/register', superCheck.fromRegistration, registration.registration);//ok
router.post('/sendIssue', superCheck.fromSendIssue, issue.createIssue);//ok
router.delete('/delIssue/:id', issue.delIssue);//ok
router.get('/myIssue/:id', superCheck.SearchCondition, issue.showMyIssue);//ok
router.get('/feedbackIssue/:id', feedback.showFeedback);//ok
router.post('/comment',checkComment, comment.createComment);//ok
router.get('/listTopic', topic.showTopic);//ok
router.get('/listComment/:issue_id', comment.showCommentByIssue);//ok
router.get('/listNewsIssueInTopic/:topicId', superCheck.SearchCondition, news.showIssueInTopic);

//admin
router.get('/listIssues', superCheck.SearchCondition, issue.ShowIssueInStatus);




module.exports = router;
