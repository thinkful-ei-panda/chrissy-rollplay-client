import React from 'react';
import rollplayblack from '../img/rollplayblack.png';
import TopicsList from '../TopicsList/TopicsList';
import TopicsListContext from '../../contexts/TopicsContext';
import AddTopic from '../addTopic/addTopic';
import './Landing.css';

class Landing extends React.Component {
  static contextType = TopicsListContext;

  constructor(props) {
    super(props);
    this.state = {
      selectedStart: false,
      addingTopic: false
    }
  }

  handleStartClicked = () => {
    this.setState({selectedStart : true})
  }

  handleLogOutClicked = () => {
    this.setState({selectedStart : false})
  }

  handleAddTopicClicked = () => {
    this.setState({addingTopic : true})
  }

  handleGoBackClicked = () => {
    this.setState({addingTopic : false})
  }

  renderPages() {
    const { selectedStart, addingTopic } = this.state;

    if (selectedStart === false) {
      return (
        <div className="start-button">
          <button type="button" onClick={this.handleStartClicked}>Let's Get Started</button>
        </div>
      )
    } else if (selectedStart === true && addingTopic === false) {
      return (
        <>
          <div className="logout-button">
            <button type="button" onClick={this.handleLogOutClicked}>Bye bye!</button>
          </div>
          <section className="addTopicSection">
            <button type="button" onClick={this.handleAddTopicClicked}>New Topic</button>
          </section>
          <TopicsList />
        </>
      ) 
    } else if (selectedStart === true && addingTopic === true) {
      console.log('got to add topic')
      return (
        <section className="addTopicSection">
          <AddTopic goBack={this.handleGoBackClicked} />
        </section>
      )
    }  
    }

  render() {
    return (
      <main className="landing">
        <div className="landing-logo-box">
          <img src={rollplayblack} alt="logo" className="logo" />
        </div>
        <section>
          {this.renderPages()}
        </section>
      </main>
    )
  }
}

export default Landing;


