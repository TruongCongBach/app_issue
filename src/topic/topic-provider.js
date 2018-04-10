const Topic = require('./topic');

class UserProvider {
    /**
     *
     * @param {Connection} connection
     * @param {object} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    providerId(id) {
        return this.connection.select().from('topics').where({
            id : id,
        }).then((arrayTopic) => {
            let topic = new Topic();
            topic.setId(arrayTopic[0].id);
            topic.setName(arrayTopic[0].name);
            return topic;
        })
    }

    providerAll() {
        return this.connection.select().from('topics').then((arrayTopic) => {
           return arrayTopic.map(element => this.factory.makeFromTopicDB(element))
        })
    }
}

module.exports = UserProvider;
