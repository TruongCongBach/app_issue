const Connection = require('../../database/connection');

class ListIssue {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    showIssue() {
      return connection.select().from('issue').where({
          status_id : 1,
      });
    }

}

module.exports = ListIssue;
