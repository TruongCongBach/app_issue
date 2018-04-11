class NewsController {

    showIssueInTopic(request, response, next) {
        let searcher = request.app.get('issue.searcher');
        searcher.searchCondition(request.condition).then((arrayIssueTopic)=>{
            response.send(arrayIssueTopic);
        });
    }



}

module.exports = NewsController;
