class StatusIssue {

    /**
     *
     * @param sqlQuery
     * @return {string}
     */
    describe(sqlQuery) {
        return sqlQuery
            .where(function () {
                this.where('status', 'like', '%No process%')
            }).where({'issues.archived_at': null});
    }
}

module.exports = StatusIssue;