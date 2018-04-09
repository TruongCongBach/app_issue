const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../http/middleware/index');
const Contronller             = require('../http/controller/index');
let issue = new Contronller.issueControler();
let registration = new Contronller.registration();
let feedback = new Contronller.feedbackContronler();


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



module.exports = router;
