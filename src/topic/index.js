const FactoryTopic      = require('../topic/factory-topic-db');
const ListTopic         = require('../topic/topic-provider');

module.exports = function (app, connection) {
    app.set('listTopic', new ListTopic(connection, new FactoryTopic()));
};
