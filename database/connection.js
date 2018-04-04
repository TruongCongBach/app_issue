// require('dotenv').config();

const connection = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : '1',
        database : 'app_issue'
    },
});

module.exports = connection;
