import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import TopicsListContext from '../../contexts/TopicsContext';

class EditComment extends Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      comment_desc: ''
    };
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  handleSubmitEditComment = (event) => {
    const { comment_desc } = this.state;
    const { comment_id, cancelEdit } = this.props;
    event.preventDefault();
    cancelEdit();
    ApiService.editComment(comment_id, comment_desc)
      .then(this.context.setTopicContent)
      .catch(error => {this.context.setError(error)})
  };

  render() {
    const { cancelEdit } = this.props;
    return (
      <section className="editing-topic">
        <form className="edit-topic-form" onSubmit={this.handleSubmitEditComment}>
          <textarea name="comment_desc" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <button type="button" onClick={cancelEdit}>Go Back</button>
        </form>
      </section>
    )
  }
}

export default EditComment;