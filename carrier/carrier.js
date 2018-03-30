const Issue = require('../src/Issue');

class Carrier {

    constructor(issue, user_id){
        this.issue = issue;
        this.user_id = user_id;
    }

    /**
     *
     * @param issueRaw
     *
     */

    /*
    status
    1 sending
    2 send
    3 processing
    4 processed
    5 untreated
    6 success
     */



    inPut(inforIssue) {
        let issue = new Issue();
        issue.getStatus(1);
        issue.setUserId(inforIssue.user_id);
        issue.setDateTime();
        return issue;
    }

}

module.exports = Carrier;
