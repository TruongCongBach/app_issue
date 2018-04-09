const Topic = require('../topic/topic');
const User  = require('../user/user');
const Rate  = require('../rate');

class Issue {

    /**
     * @param {string} content
     */
    constructor(content) {
        this.content = content;
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
     * @param {object} user
     */
    setUser(user) {
        this.user = user;
    }

    /**
     *
     * @return {object} user
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

    /**
     *
     * @param  {int} point_rate
     */
    setRate(point_rate) {
        this.point_rate = point_rate;
    }

    /**
     *
     * @return {int} point_rate
     */
    getRate() {
        return this.point_rate;
    }
}

module.exports = Issue;
