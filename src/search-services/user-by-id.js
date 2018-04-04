const Connection = require('../../database/connection');

module.exports = function contentTopic(userId) {
    return Connection.select().from('users').where({
        id: userId
    })
};
