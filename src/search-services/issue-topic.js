class IssueTopic {

    /**
     *
     * @param {int} topicId
     */
    constructor (topicId){
        this.topicId = topicId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Issue[]}
     */
    describe(sqlQuery) {
        let topicId = this.topicId;
        return sqlQuery
            .where(function () {
                this.where('topic_id', 'like', '%' + topicId + '%')
            }).where({'issues.archived_at': null});
    }
}

module.exports = IssueTopic;
