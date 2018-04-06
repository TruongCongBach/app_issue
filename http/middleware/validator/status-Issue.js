const Connection = require('../../../database/connection');

class StatusIssue {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    checkStatusIssue(userId) {
       return Connection.select().from('issues').where({
            user_id     : userId,
            status      : 'No process',
            archived_at : null
        }).then((result)=>{
           if(result.length === 0){
               return true
           }
               return false;
       })
    }
}


module.exports = StatusIssue;