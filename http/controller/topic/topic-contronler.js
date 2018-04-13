class TopicContronler {

    showTopic(req, res, next) {
        req.app.get('listTopic').providerAll().then((arrayTopic) => {
            res.json(arrayTopic);
        })
    }

}

module.exports = TopicContronler;
