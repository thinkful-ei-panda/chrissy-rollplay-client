import React from 'react';
import './Topics.css';

class Topics extends React.Component {
  render() {
    return (
      <ul>
        <div class="ticket">
          <p>Ticket</p>
          <button type="button" role="expand" class="topics-button expand-ticket">
            Details
          </button>
        </div>
        <div class="ticket">
          <p>Ticket</p>
          <button type="button" role="expand" class="topics-button expand-ticket">
            Details
          </button>
        </div>
        <div class="ticket">
          <p>Ticket</p>
          <button type="button" role="expand" class="topics-button expand-ticket">
            Details
          </button>
        </div>
      </ul>
    )
  }
}

export default Topics;