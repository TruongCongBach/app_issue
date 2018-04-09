const Topic = require('../topic/topic');

class FactoryTopicDB {

    /**
     *
     * @param topic
     * @return {Topic}
     */
    makeFromTopicDB(topic) {
        let myTopic = new Topic();
        myTopic.setName(topic.name);
        myTopic.setId(topic.id);
        return myTopic;
    }
}

module.exports = FactoryTopicDB;
