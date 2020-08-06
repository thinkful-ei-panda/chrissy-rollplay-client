import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import TopicsListContext from '../../contexts/TopicsContext';
import './addComment.css';

class AddComment extends Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      comment_owner: '',
      comment_passphrase: '',
      comment_desc: ''
    };
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  handleSubmitNewComment = (event) => {
    const { comment_owner, comment_passphrase, comment_desc } = this.state;
    const { topicId, handleCancelComment } = this.props;
    event.preventDefault();
    ApiService.postComment(comment_owner, comment_passphrase, comment_desc, topicId)
      .catch(this.context.setError)
      .then(handleCancelComment)
  };

  render() {
    const { handleCancelComment } = this.props;
    return (
      <section className="add-comment">
        <form name="add-comment-form" onSubmit={this.handleSubmitNewComment}>
          <input type="text" name="comment_owner" onChange={this.handleChange} Placeholder="What's your name?" />
          <textarea name="comment_desc" onChange={this.handleChange} placeholder="Comment Description" />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancelComment}>Cancel</button>
        </form>
      </section>
    )
  }
}

export default AddComment;