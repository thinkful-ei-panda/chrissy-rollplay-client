import React from 'react';
import { Link } from 'react-router-dom';
import TopicsListContext from '../../contexts/TopicsContext';
class Topics extends React.Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      currentTopic: undefined
    }
  }

  // handleDetailsClick = (id) => {
  //   console.log(id)
  //   this.context.setCurrentTopic(id)
  // }

  // onClick={() => this.handleDetailsClick(this.props.id)}

  render = () => {
    const { id, title, system, date, owner } = this.props;

    return (
      <li key={id} className="ticket">
        <h2>{title}</h2>
        <h3>{system}</h3>
        <h4>{owner}</h4>
        <p>{date}</p>
        <Link to={`/topics/${id}`}>Details</Link>
      </li>
    )
  }
}

export default Topics;