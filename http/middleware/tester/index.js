const Tester            = require('../tester/tester');

module.exports = function (app) {
    app.set('middle.tester', new Tester(connection));
};