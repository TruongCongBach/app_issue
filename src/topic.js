class Topic {

    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @return {string} name
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
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
     * @return {int} id
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param array
     * @return {Topic} topic
     */
    setTopic(array) {
        this.setId(array.id);
        this.setName(array.name);
        return Topic;
    }
}

module.exports = Topic;
