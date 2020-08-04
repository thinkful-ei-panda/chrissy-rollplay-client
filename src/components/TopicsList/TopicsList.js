import React from 'react';
import Topics from '../Topics/Topics.js';
import DetailedTopic from '../DetailedTopic/DetailedTopic';
import ApiService from '../../services/api-service.js';
import './TopicsList.css';
import TopicsListContext from '../../contexts/TopicsContext.js';

class TopicsList extends React.Component {
  static contextType = TopicsListContext;



  componentDidMount() {
    this.context.clearError()
    ApiService.getTopics()
      .then(this.context.setTopicsList)
      .catch(this.context.setError)
  }

  render() {
    const { topicsList = [] } = this.context;
    return topicsList.map(topic =>
      <Topics
        id={topic.topic_id}
        title={topic.title}
        system={topic.rpg_system}
        date={topic.date_created}
        owner={topic.topic_owner}
        passphrase={topic.topic_passphrase}
      />
    )
  }
}

export default TopicsList;

