class TopicContronler {

    showTopic(req, res, next) {
        req.app.get('listTopic').providerAll().then((arrayTopic) => {
            res.send(arrayTopic);
        })
    }

}

module.exports = TopicContronler;
