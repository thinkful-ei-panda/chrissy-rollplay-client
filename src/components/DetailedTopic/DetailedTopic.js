import React from 'react';
import TopicsListContext from '../../contexts/TopicsContext';
import CommentsList from '../CommentsList/CommentsList';
import ApiService from '../../services/api-service';

class DetailedTopic extends React.Component {
  static contextType = TopicsListContext;

  componentDidMount() {
    this.context.clearError();
    const id = this.props.match.params.id;
    ApiService.getTopic(id)
      .then(this.context.setTopicContent)
      .catch(this.context.setError)
  }

  render() {
    const { topicContent = {} } = this.context;
    return (
        <>
          <section className="detailedTopic">
            <li key="" className="ticket">
              <h2>{topicContent.title}</h2>
              <h3>{topicContent.rpg_system}</h3>
              <h4>{topicContent.topic_owner}</h4>
              <p>{topicContent.topic_date}</p>
              <p>{topicContent.topic_desc}</p>
              <button type="button" className="topics-button expand-ticket" onClick={this.handleBackClick}>
                Back
              </button>
            </li>
          </section>
          <section className="commentsBox">
            <CommentsList />
          </section>
        </>
      )
  }
}

export default DetailedTopic;