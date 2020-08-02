import React from 'react';
import Topics from '../Topics/Topics.js';
import './TopicsList.css';

class TopicsList extends React.Component {
  render() {
    return (
      <section class="questions-list">
        <h1>Ticket List</h1>
        <Topics />
      </section>
    )
  }
}

export default TopicsList;