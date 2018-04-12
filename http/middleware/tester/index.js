const Tester            = require('../tester/tester');
module.exports = function (app) {
    const connection = app.get('config').database;
    app.set('middle.tester', new Tester(connection));
};