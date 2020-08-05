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
      addingTopic: false
    }
  }

  handleAddTopicClicked = () => {
    this.setState({addingTopic : true})
  }

  handleGoBackClicked = () => {
    this.setState({addingTopic : false})
  }

  renderPages() {
    const { selectedStart ,setSelectedStart, clearSelectedStart } = this.context;
    const { addingTopic } = this.state;

    if (selectedStart === false) {
      return (
        <div className="start-button">
          <button type="button" onClick={setSelectedStart}>Let's Get Started</button>
        </div>
      )
    } else if (selectedStart === true && addingTopic === false) {
      return (
        <>
          <div className="logout-button">
            <button type="button" onClick={clearSelectedStart}>Bye bye!</button>
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


