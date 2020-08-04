import React from 'react';
import './Topics.css';
// import ApiService from '../../services/api-service.js';
import TopicsContext from '../../contexts/TopicsContext';
// import { BrowserRouter } from 'react-router-dom';

class Topics extends React.Component {

  static contextType = TopicsContext


  render() {
    const { id, title, system, date, desc, topic_owner } = this.props;
    console.log(topic_owner);
    return (
        <>
          <li key={id} className="ticket">
            <h2>{title}</h2>
            <h3>{system}</h3>
            <h4>{topic_owner}</h4>
            <p>{date}</p>
            <button type="button" className="topics-button expand-ticket">
              Details
            </button>
          </li>
        </>
    )
  }
}

export default Topics;