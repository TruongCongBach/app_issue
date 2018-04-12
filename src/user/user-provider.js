const User = require('./user');
const connection = require('../../database');

module.exports = function providerId(id) {
        return connection.select().from('users').where({
            id : id,
        }).then((arrayUser) => {
            let user = new User(arrayUser[0].username, arrayUser[0].password);
                user.setId(arrayUser[0].id);
                user.setRole(arrayUser[0].role);
            return user;
        })
    };



