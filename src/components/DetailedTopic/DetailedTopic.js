import React from 'react';
import { Link } from 'react-router-dom';
import AddComment from '../addComment/addComment';
import EditTopic from '../editTopic/editTopic';
import TopicsListContext from '../../contexts/TopicsContext';
import CommentsList from '../CommentsList/CommentsList';
import ApiService from '../../services/api-service';

class DetailedTopic extends React.Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      commenting: false,
      editingTopic: false
    }
  };

  handleAddComment = () => {
    this.setState({commenting: true})
  };

  handleCancelComment = () => {
    this.setState({commenting: false})
  };

  handleEditTopic = () => {
    this.setState({editingTopic: true})
  };

  handleCancelEditTopic = () => {
    this.setState({editingTopic: false})
  };

  componentDidMount() {
    this.context.clearError();
    const id = this.props.match.params.id;
    console.log(id)
    ApiService.getTopic(id)
      .then(this.context.setTopicContent)
      .catch(this.context.setError)
  }

  handleDeleteTopic = (event) => {
    const { topicContent = {}, setSelectedStart } = this.context;
    console.log(topicContent.topic_id)
    event.preventDefault();
    ApiService.deleteTopic(topicContent.topic_id)
      .then(setSelectedStart)
      .catch(this.context.setError)
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }



  render() {
    const { topicContent = {}, setSelectedStart } = this.context;
    const { commenting, editingTopic } = this.state;
    const topic_id = this.props.match.params.id;
    console.log(topic_id)
      if (commenting === true && editingTopic === false) {
        console.log('commenting true')
        return (
          <section class="detailed-topic-box">
            <section className="detailedTopic">
              <li key="" className="ticket">
                <h1>Title: {topicContent.title}</h1>
                <h3>User: {topicContent.topic_owner}</h3>
                <h4>RPG System: {topicContent.rpg_system}</h4>
                <p>Date created:{topicContent.topic_date}</p>
                <p>{topicContent.topic_desc}</p>
              </li>
            </section>
            <section className="addComment">
              <AddComment handleCancelComment={this.handleCancelComment} topicId={topic_id} />
            </section>
            <section className="commentsBox">
              <CommentsList id={this.props.match.params.id} />
            </section>
          </section>
      )
    } else if (commenting === false && editingTopic === true) {
      console.log('editing true')
      return (
        <section className="detailed-topic-box">
          <EditTopic cancelEdit={this.handleCancelEditTopic} topicId={this.props.match.params.id} />
        </section>
      )
    } else {
      console.log('normal view')
      return (
        <section className="detailed-topic-box"> 
          <li key="" className="ticket">
            <h1>Title: {topicContent.title}</h1>
            <h3>User: {topicContent.topic_owner}</h3>
            <h4>RPG System: {topicContent.rpg_system}</h4>
            <p>Date created:{topicContent.topic_date}</p>
            <p>{topicContent.topic_desc}</p>
            <button type="button" onClick={this.handleAddComment}>Add Comment</button>
            <button type="button" onClick={this.handleEditTopic}>Edit</button>
            <Link to={`/`}>
              <button type="button" onClick={setSelectedStart}>
                Back
              </button>
            </Link>
          </li>
          <section className="commentsBox">
            <CommentsList id={this.props.match.params.id} />
          </section>
        </section>          
    )
  }
}
}
export default DetailedTopic;