import React from 'react';
import ApiService from '../../services/api-service';
import CommentsContext from '../../contexts/CommentsContext';

class Comments extends React.Component {
  static contextType = CommentsContext;

  //Uses comment ID to delete from the db, then topic id to retrieve remaining comments and re-render the list
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
    const { id, desc, date, owner } = this.props;
    return (
        <li key={id} className="comment">
          <h2>User: {owner}</h2>
          <h3>Date created: {date}</h3>
          <p>{desc}</p>
          <button type="button" onClick={this.handleDeleteComment}>Delete</button>
        </li>
    )
  }
}

export default Comments;