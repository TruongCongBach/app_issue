const validator   = require('validator');
const makeFormReq = require('../../../src/issue/factory-rq');
const StatusIssue = require('../validator/status-Issue');

let checkStatus = new StatusIssue(this.connection);

module.exports = function checkFormIssue(req, res, next) {
        //check content issue khong dc de trong
        if(!validator.isLength(req.body.content , {min: 3, max: 40})) {
           return res.send({
                'content' : req.body.content,
                'condition':'min = 3 max = 40'
            });
        }

        //check status cua issue
        checkStatus.checkStatusIssue(req.body.user_id).then((boolean) => {
            if(boolean) {
                new makeFormReq().makeFormReq(req.body).then( (issue) => {
                    req.issue = issue;
                    next();
                });
            } else {
                res.send('user khong duoc gui issue');
            }
        })
    };
