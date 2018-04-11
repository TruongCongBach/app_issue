module.exports = function (app) {
    const connection = require('knex')(app.get('config').database);
    app.set('databaseConnection', connection);
};