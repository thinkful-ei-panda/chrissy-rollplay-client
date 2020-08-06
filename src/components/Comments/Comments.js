import React from 'react';
import './Comments.css';
import ApiService from '../../services/api-service';
import CommentsContext from '../../contexts/CommentsContext';

class Comments extends React.Component {
  static contextType = CommentsContext;

  handleDeleteComment = (event) => {
    const { id, topic_id } = this.props;
    event.preventDefault();
    ApiService.deleteComment(id)
      .then(data => ApiService.getComments(topic_id)
        .then(comments => this.context.setCommentsList(comments))
      )
      .catch(error => this.context.setError(error)
      )
    }
    
  render() {
    const { id, desc, date, thread, owner } = this.props;
    return (
        <li key={id} className="comment">
          <p>{id}</p>
          <h2>{owner}</h2>
          <h3>{date}</h3>
          <h4>{thread}</h4>
          <p>{desc}</p>
          <button type="button" onClick={this.handleDeleteComment}>Delete</button>
        </li>
    )
  }
}

export default Comments;