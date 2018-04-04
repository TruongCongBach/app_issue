const Connection = require('../../database/connection');

module.exports = function (id) {
    return Connection.select().from('status').where({
        id : id
    })
};