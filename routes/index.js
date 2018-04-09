const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../http/middleware/index');
const Controller             = require('../http/controller/index');
let issue         = new Controller.issueControler();
let registration  = new Controller.registration();
let feedback      = new Controller.feedbackContronler();
let topic         = new Controller.TopicContronler();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//member
router.post('/register', superCheck.fromRegistration, registration.registration);
router.post('/sendIssue', superCheck.fromSendIssue, issue.createIssue);
router.delete('/delIssue/:id', issue.delIssue);
router.get('/myIssue/:id', superCheck.SearchCondition, issue.showMyIssue);
router.get('/feedbackIssue/:id', feedback.showFeedback); //issue_id
router.get('/listTopic', topic.showTopic);
router.get('/listNewsIssueInTopic/:topicId', superCheck.SearchCondition, issue.showIssueInTopic);




module.exports = router;
