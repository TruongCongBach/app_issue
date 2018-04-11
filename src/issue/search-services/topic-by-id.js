const Connection = require('../../../database/connection');

module.exports = function contentTopic(TopicId) {
    return Connection.select().from('topics').where({
        id: TopicId
    });
};
