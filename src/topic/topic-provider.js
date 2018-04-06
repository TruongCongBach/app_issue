const Topic = require('./topic');
const Connection = require('../../database/connection');

class UserProvider {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    providerId(id) {
        return Connection.select().from('topics').where({
            id : id,
        }).then((arrayTopic) => {
            let topic = new Topic();
            topic.setId(arrayTopic[0].id);
            topic.setName(arrayTopic[0].name);
            return topic;
        })
    }
}

module.exports = UserProvider;
