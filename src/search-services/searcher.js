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
    searchCondition(condition) {
        let sqlQuery = this.connection('issues')
            .innerJoin('topics', 'issues.topic_id', 'topics.id');
        condition.describe(sqlQuery);
        return sqlQuery.then(issue => issue.map(element => this.factory.makeFormIssueDB(element)));

    }

}

module.exports = Searcher;
