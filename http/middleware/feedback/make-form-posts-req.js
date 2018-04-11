const MakeFormFeedback = require('../../../src/feed-back/make-feq');

module.exports = function (req, res, next) {
    new MakeFormFeedback().makeReq(req.body)
        .then((feedback)=>{
            req.feedback = feedback;
            next();
        })
};
