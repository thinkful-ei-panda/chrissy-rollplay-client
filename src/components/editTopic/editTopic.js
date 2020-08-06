import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import TopicsListContext from '../../contexts/TopicsContext';

class EditTopic extends Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rpg_system: '',
      topic_desc: ''
    };
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  handleSubmitEditTopic = (event) => {
    const { title, rpg_system, topic_desc } = this.state;
    const { topicId, cancelEdit } = this.props;
    event.preventDefault();
    cancelEdit();
    ApiService.editTopic(topicId, title, topic_desc, rpg_system)
      .then(this.context.setTopicContent({
          title : title,
          topic_desc : topic_desc,
          rpg_system : rpg_system
        })
        )
      .catch(error => (
        this.context.setError(error)
      ))
  };

  render() {
    const { cancelEdit } = this.props;
    return (
      <section className="editing-topic">
        <form className="edit-topic-form" onSubmit={this.handleSubmitEditTopic}>
          <input type="text" name="title" onChange={this.handleChange} />
          <input type="text" name="rpg_system" onChange={this.handleChange} />
          <textarea name="topic_desc" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <button type="button" onClick={cancelEdit}>Go Back</button>
        </form>
      </section>
    )
  }
}

export default EditTopic;