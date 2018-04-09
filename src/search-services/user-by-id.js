const connection = require('../../database/connection');

module.exports = function contentTopic(userId) {
    return connection.select().from('users').where({
        id: userId
    })
};
