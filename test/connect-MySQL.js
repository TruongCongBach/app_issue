let connection = require('../database/connection');

connection.select().from('users').then(function (asdas) {
    console.log(asdas);
});