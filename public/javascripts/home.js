$(document).ready(function () {
    $.ajax({
       url: '/showIssueNews',
        method: 'get',
        contentType: 'application/json' 
    }).then(renderListIssue);



    $.ajax({
       url: '/listTopic',
       method: 'get',
       contentType: 'application/json'
    }).then(renderTopic);

    $(document).on('click', '#a', function () {
        $.ajax({
            url: '/showIssueInNews/'.concat($(this).data('topic-id')),
            method: 'get',
            contentType: 'application/json'
        }).then(renderListIssue);
    });





    function renderListIssue(arrayIssue) {
        let template = $('#list-issue-template').html();
        let resultHtml = arrayIssue.map(function (issue) {
            return template
                .replace(':Issue:', issue.content)
                .replace(':issue-id:', issue.id)
        }).join('');
        $('#table-news').html(resultHtml);
    }

    function renderTopic(arrayTopic) {
        let template = $('#list-topic-template').html();
        let resultHtml = arrayTopic.map(function (topic) {
            return template
                .replace(':topicId:', topic.id)
                .replace(':topicName:', topic.name)
        }).join('');
        $('#list-topic').html(resultHtml);
    }

    

});