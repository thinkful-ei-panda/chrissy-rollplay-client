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
      editingTopic: false,
      editingComment: false,

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

  handleEditComment = () => {
    this.setState({editingComment: true})
  };

  handleCancelEditComment = () => {
    this.setState({editingComment: false})
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
    const { commenting, editingTopic, editingComment } = this.state;
    const topic_id = this.props.match.params.id;
    console.log(topic_id)
      if (commenting === true && editingTopic === false && editingComment === false) {
        console.log('commenting true')
        return (
          <>
            <section className="detailedTopic">
              <li key="" className="ticket">
                <h2>{topicContent.title}</h2>
                <h3>{topicContent.rpg_system}</h3>
                <h4>{topicContent.topic_owner}</h4>
                <p>{topicContent.topic_date}</p>
                <p>{topicContent.topic_desc}</p>
              </li>
            </section>
            <section className="addComment">
              <AddComment handleCancelComment={this.handleCancelComment} topicId={topic_id} />
            </section>
            <section className="commentsBox">
              <CommentsList id={this.props.match.params.id} />
            </section>
          </>
      )
    } else if (commenting === false && editingTopic === true && editingComment === false) {
      console.log('editing true')
      return (
        <EditTopic cancelEdit={this.handleCancelEditTopic} topicId={this.props.match.params.id} />
      )
    // } else if (commenting === false && editingTopic === false && editingComment === true) {
    //   return (

    //   )
    } else {
      console.log('normal view')
      return (
        <> 
          <li key="" className="ticket">
            <h2>{topicContent.title}</h2>
            <h3>{topicContent.rpg_system}</h3>
            <h4>{topicContent.topic_owner}</h4>
            <p>{topicContent.topic_date}</p>
            <p>{topicContent.topic_desc}</p>
            <button type="button" onClick={this.handleAddComment}>Add Comment</button>
            <button type="button" onClick={this.handleEditTopic}>Edit</button>
            <Link to={`/`}>
              <button type="button" onClick={this.handleDeleteTopic}>Delete Topic</button>
            </Link>
            <Link to={`/`}>
              <button type="button" onClick={setSelectedStart}>
                Back
              </button>
            </Link>
          </li>
          <section className="commentsBox">
            <CommentsList id={this.props.match.params.id} />
          </section>
        </>          
    )
  }
}
}
export default DetailedTopic;