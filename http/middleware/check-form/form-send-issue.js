const validator   = require('validator');
const makeFormReq = require('../../../src/issue/factory-issue-rq');


module.exports = function checkFormIssue(req, res, next) {
        //check content issue khong dc de trong
        if(!validator.isLength(req.body.content , {min: 3, max: 40})) {
           return res.send({
                'content' : req.body.content,
                'condition':'min = 3 max = 40'
            });
        }

        //check status cua issue
        let tester = req.app.get('middle.tester');
        tester.statusIssue(req.body.user_id).then((arrayIssue) => {
            if(arrayIssue.length === 0) {
                new makeFormReq().makeFormReq(req, res, next);
            } else {
                res.send('user not send Issue');

            }
        })
    };
