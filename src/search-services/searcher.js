class Searcher {

    /**
     *
     * @param {Connection} connection
     * @param {object} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    /**
     *
     * @param condition
     * @return Issue[]
     */
    searchIssueTopic(condition) {
        let sqlQuery = this.connection.from('issues')
            .innerJoin('topics', 'issues.topic_id', 'topics.id');
        condition.describe(sqlQuery);
        return sqlQuery.then(issue => issue.map(element => this.factory.makeFormDB(element)));

    }

}

module.exports = Searcher;
