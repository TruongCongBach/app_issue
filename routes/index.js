const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../http/middleware/index');
const Controller             = require('../http/controller/index');
let issue = new Controller.issueControler();
let registration = new Controller.registration();
let feedback = new Controller.feedbackContronler();
let comment  = new Controller.commentController();
let checkComment = [superCheck.checkComment, superCheck.commentRequest];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//member
router.post('/register', superCheck.fromRegistration, registration.registration);
router.post('/sendIssue', superCheck.fromSendIssue, issue.createIssue);
router.delete('/delIssue/:id', issue.delIssue);
router.get('/myIssue/:id', superCheck.SearchCondition, issue.showMyIssue);
router.get('/feedbackIssue/:id', feedback.showFeedback);
router.post('/comment',checkComment, comment.createComment);


module.exports = router;
