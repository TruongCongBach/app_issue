class IssueId {

    /**
     *
     * @param {int} id
     */
    constructor (id){
        this.id = id;
    }

    /**
     *
     * @param sqlQuery
     * @return {Issue[]}
     */
    describe(sqlQuery) {
        let id = this.id;

        return sqlQuery
            .where({
                'issues.id' : id
            }).where({
                'issues.archived_at': null,
            });
    }
}

module.exports = IssueId;
