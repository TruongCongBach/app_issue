module.exports = (req, res, next) => {
    if(!req.body.comment.length) {
        return res.status(411).send({message : 'comment is not null'});
    }
    next();
};
