class IssueUser {

    /**
     *
     * @param {int} userId
     */
    constructor (userId){
        this.userId = userId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Issue[]}
     */
    describe(sqlQuery) {
        let userId = this.userId;
        return sqlQuery
            .where(function () {
                this.where('user_id', 'like', '%' + userId + '%')
            }).where({'issues.archived_at': null});
    }
}

module.exports = IssueUser;
