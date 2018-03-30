const Topic = require('');// nem thang class topic vao day
const Status = require(''); //nem con class status vao day
const User = require(''); // nem con class user
class Issue {

    /**
     *
     * @param {Topic} topic
     * @param content
     */
    constructor(topic, content) {
        this.topic = topic;
        this.content = content;
        this.dateTime = new Date().toLocaleString();
    }

    getUser() {

    }

    /**
     *
     * @param {Topic} topic
     */
    setTopic(topic) {
        this.topic = topic;
    }

    /**
     *
     * @return {Topic} topic
     */
    getTopic() {
        return this.topic;
    }

    /**
     *
     * @param {Status} status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @return {Status}
     */
    getStatus() {
        return this.status;
    }


    /**
     * @return {string}
     */
    getDateTime() {
         return this.dateTime;
    }

}

module.exports = Issue;
