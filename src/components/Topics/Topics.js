import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/api-service';
import TopicsListContext from '../../contexts/TopicsContext';

class Topics extends React.Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      currentTopic: undefined,
      currentImageIndex: undefined
    }
  }

  changeImage = () => {
    const randomImage = Math.floor(Math.random() * this.state.images.length);
    console.log('changeImage fired')
    document.getElementById("pixel-portrait").src = this.state.images[randomImage]
  }

  handleDeleteTopic = (event) => {
    const { id } = this.props;
    event.preventDefault();
    ApiService.deleteTopic(id)
      .then(ApiService.getTopics)
      .then(this.context.setTopicsList)
      .catch(this.context.setError)
  }

  render = () => {
    const { id, title, system, date, owner } = this.props;
    return (
      <li key={id} className="ticket box effect5">
        <h2>User: {owner}</h2>
        <h3>Title: {title}</h3>
        <h4>RPG System: {system}</h4>
        <p>Date created:{date}</p>
        <Link to={`/topics/${id}`}>
          <button>
            Details
          </button>
        </Link>
        <button type="button" onClick={this.handleDeleteTopic}>Delete</button>
      </li>
    )
  }
}

export default Topics;