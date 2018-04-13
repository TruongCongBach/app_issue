class NewsController {

    showIssueInTopic(request, response) {
        let searcher = request.app.get('issue.searcher');
        searcher.searchCondition(request.condition).then((arrayIssueTopic)=>{
            response.json(arrayIssueTopic);
        });
    }

    createPosts(request, response) {
        request.app.get('news.repo').addPosts(request.params.issueId).then(()=>{
            response.send('create posts success');
        })
    }

    deletePosts(request, response) {
        request.app.get('news.repo').delPosts(request.params.issueId).then(()=>{
            response.send('del posts success');
        })
    }


}

module.exports = NewsController;
