
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
}

module.exports = IssueController;
