const Issue      = require('./issue');
const connection = require('../../database/connection');

module.exports = function providerId(id) {
    return connection.select().from('issues').where({
        id : id,
    }).then((arrayIssue) => {
        let issue = new Issue(arrayIssue[0].content);
        issue.setId(arrayIssue[0].id);
        return issue;
    })
};



