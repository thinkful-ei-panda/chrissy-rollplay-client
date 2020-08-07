import React from 'react';
import Comments from '../Comments/Comments.js';
import ApiService from '../../services/api-service.js';
import CommentsContext from '../../contexts/CommentsContext.js';

class CommentsList extends React.Component {
  static contextType = CommentsContext;

  componentDidMount() {
    const { id } = this.props;
    this.context.clearError()
    ApiService.getComments(id)
      .then(this.context.setCommentsList)
      .catch(this.context.setError)
  }


  render() {
    const { commentsList = [] } = this.context;
    const { id } = this.props;
    return commentsList.map(comment =>
          <Comments 
            key={comment.comment_id}
            id={comment.comment_id}
            desc={comment.comment_desc}
            date={comment.date_created}
            thread={comment.comment_thread}
            owner={comment.comment_owner}
            passphrase={comment.comment_passphrase}
            solution={comment.marked_solution}
            topic_id={id}
          />
    )
  }
}

export default CommentsList;