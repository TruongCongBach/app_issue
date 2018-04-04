const Topic = require('../topic');
const User  = require('../user');
const Rate  = require('')// rate

class Issue {

    /**
     * @param {Topic} topic
     * @param {string} content
     */
    constructor(topic, content) {
        this.topic   = topic;
        this.content = content;
    }

    /**
     *
     * @return {string} content
     */
    getContent() {
        return this.content;
    }

    /**
     *
     * @return {int} id
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @param {string} status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @return {string} status
     */
    getStatus() {
        return this.status;
    }

    /**
     *
     * @param {User} user
     */
    setUser(user) {
        this.user = user;
    }

    /**
     *
     * @return {User} user
     */
    getUser() {
        return this.user;
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
     * @param {Topic} topic
     */
    setTopic(topic) {
        this.topic = topic;
    }


    /**
     * @return {string} dateTime
     */
    getDateTime() {
         return this.dateTime;
    }

    /**
     *
     * @param {string} dateTime
     */
    setDateTime(dateTime) {
        this.dateTime = dateTime;
    }

}

module.exports = Issue;
