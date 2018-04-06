const Connection = require('../../../database/connection');

class TesterUser {

    checkUser(username) {
        return Connection.select().from('users').where({
            userName : username
        });
    }

}
module.exports =  TesterUser;