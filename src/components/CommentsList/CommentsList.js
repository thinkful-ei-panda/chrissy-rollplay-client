import React from 'react';
import Comments from '../Comments/Comments.js';
import './CommentsList.css';

class CommentsList extends React.Component {
  render() {
    return (
      <section class="comments-list">
        <h1 class="comments-header">Comment List</h1>
        <form class="add-comment-form hidden">
          <h2 class="add-comment-label">
            Enter your comment...
          </h2>
          <textarea type="text" class="new-comment-input" placeholder="Start here" />
          <button class="submit-new-comment">Submit</button>
        </form>
        <Comments />
      </section>
    )
  }
}

export default CommentsList;