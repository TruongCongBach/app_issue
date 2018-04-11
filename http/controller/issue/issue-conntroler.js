class IssueController {

        createIssue(request, response, next) {
            let repo = request.app.get('issues.repo');
            repo.addIssue(request.issue).then(() => {
                response.send('thanh cong');
            })
        }

        delIssue(request, response, next) {
            let repo = request.app.get('issues.repo');
            repo.delete(request.params.id).then(() => {
                response.send('thanh cong');
            })
        }

        showMyIssue(request, response, next) {
            let searcher = request.app.get('issue.searcher');
            searcher.searchCondition(request.condition).then((arrayIssueUser)=>{
                response.send(arrayIssueUser);
            });
        }

        ShowIssueInStatus(request, response, next) {
            let searcher = request.app.get('issue.searcher');
            searcher.searchCondition(request.condition).then((arrayIssueStatus)=>{
                response.send(arrayIssueStatus);
            });
        }
}

module.exports = IssueController;
