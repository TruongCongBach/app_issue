const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../http/middleware/index');
const IssueController        = require('../http/controller/issue/issue-conntroler');
const RegistrationControler  = require('../http/controller/registration/registrationController');


let issueController = new IssueController();
let registrationControler = new RegistrationControler();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.post('/register', superCheck.fromRegistration, registrationControler.registration);
router.post('/sendIssue', superCheck.fromSendIssue, issueController.createIssue);
router.delete('/delIssue/:id', issueController.delIssue);


module.exports = router;
