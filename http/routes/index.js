const express                = require('express');
const router                 = express.Router();
const superCheck             = require('../middleware/index');
const Controller             = require('../controller/index');

let checkComment  = [superCheck.checkComment, superCheck.commentRequest];
let issue         = new Controller.issueControler();
let registration  = new Controller.registration();
let feedback      = new Controller.feedbackContronler();
let topic         = new Controller.TopicContronler();
let comment       = new Controller.CommentContronler();
let news          = new Controller.NewsController();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk', {title: 'Express'});
});

//views
router.get('/listTopic', topic.showTopic);//ok
//member


router.post('/register', superCheck.fromRegistration, registration.registration);//ok
router.delete('/delIssue/:id', issue.delIssue);//ok
router.get('/myIssue/:id', superCheck.SearchCondition, issue.showMyIssue);//ok
router.post('/sendIssue', superCheck.fromSendIssue, issue.createIssue);//ok
router.get('/feedbackIssue/:id', feedback.showFeedback);//ok
router.post('/comment',checkComment, comment.createComment);//ok
router.get('/listComment/:issue_id', comment.showCommentByIssue);//ok


//admin show issue status = not process
router.get('/listIssues', superCheck.SearchCondition, issue.ShowIssueInStatus);
router.put('/createPosts/:issueId', news.createPosts);
router.put('/deleteIssue/:issueId', news.deletePosts);

//news oki views
router.get('/showIssueInNews/:topicId', superCheck.SearchCondition, news.showIssueInTopic);

//send feedback
router.post('/sendFeedback/', superCheck.makeFormPostsReq, feedback.createFeedback);

//show issue in news views oki
router.get('/showIssueNews', superCheck.SearchCondition, issue.showIssueNews);


module.exports = router;
