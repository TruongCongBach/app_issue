class NewsIssue {

    /**
     *
     * @param sqlQuery
     * @return {string}
     */
    describe(sqlQuery) {
        return sqlQuery
            .where(function () {
                this.where('status', 'like', '%processed%')
            }).where({'issues.archived_at': null})
              .whereNotNull('issues.news');
    }
}

module.exports = NewsIssue;