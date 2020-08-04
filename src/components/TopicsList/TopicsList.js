import React from 'react';
import Topics from '../Topics/Topics.js';
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


  renderTopics() {
    const { topicsList = [] } = this.context
    console.log(topicsList);
    return topicsList.map(topic =>
      <Topics
        id={topic.topic_id}
        title={topic.title}
        system={topic.rpg_system}
        date={topic.date_created}
        desc={topic.topic_desc}
        owner={topic.topic_owner}
      />
      )
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <section className="addTopicSection">
          <button type="button">New Topic</button>
        </section>
        <ul className="questions-list">
          {error
          ? <p className='red'>There was an error</p>
          : this.renderTopics()
          }
        </ul>
      </>
    )
  }
}

export default TopicsList;