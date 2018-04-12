const FactoryTopic      = require('../topic/factory-topic-db');
const ListTopic         = require('../topic/topic-provider');

module.exports = function (app) {
    app.set('listTopic', new ListTopic(app.get('databaseConnection'), new FactoryTopic()));
};
