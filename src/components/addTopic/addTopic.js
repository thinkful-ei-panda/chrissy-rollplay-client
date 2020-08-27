import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import TopicsListContext from '../../contexts/TopicsContext';

class AddTopic extends Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      topic_owner: '',
      rpg_system: '',
      topic_desc: '',
      topic_passphrase: 'placeholder'
    };
  };

  //Fills state with text in inputs/textarea
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  //Submits the contents of the inputs/textarea and submits them via ApiService.postTopic
  handleSubmitNewTopic = (event) => {
    const { title, topic_owner, rpg_system, topic_desc, topic_passphrase } = this.state;
    const { goBack } = this.props;
    event.preventDefault();
    ApiService.postTopic(title, topic_owner, rpg_system, topic_desc, topic_passphrase)
      .catch(this.context.setError)
      .then(goBack)
  };

  render() {
    const { goBack } = this.props;
    return (
      <section className="adding-topic">
        <form className="add-topic-form" onSubmit={this.handleSubmitNewTopic}>
          <input type="text" name="title" placeholder="Enter subject" onChange={this.handleChange} />
          <input type="text" name="topic_owner" placeholder="What's your name?" onChange={this.handleChange} />
          <input type="text" name="rpg_system" placeholder="Enter system e.g. Pathfinder" onChange={this.handleChange} />
          <textarea name="topic_desc" onChange={this.handleChange} placeholder="Description" />
          <button type="submit">Create New Topic</button>
          <button type="button" onClick={goBack}>Go Back</button>
        </form>
      </section>
    )
  }
}

export default AddTopic;