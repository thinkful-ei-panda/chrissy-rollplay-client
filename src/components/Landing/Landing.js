import React from 'react';
import rollplayblack from '../img/rollplayblack.png';
import dungeonmistress from '../pixelPortraits/dungeonmistress.png';
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
        <section>
          <div className="welcome-message">
            <h2>This app is intended to be a helpful tool for connecting players, new and old, to the world of table-top roleplaying. Ask questions, create discussions, and help solve problems all on one simple platform!</h2>
          </div>
          <div className="start-button">
            <button type="button" onClick={setSelectedStart}>Let's Get Started</button>
          </div>
        </section>
      )
    } else if (selectedStart === true && addingTopic === false) {
      return (
        <>
          <section className="landing-buttons">
            <button type="button" onClick={clearSelectedStart}>Bye bye!</button>
            <button type="button" onClick={this.handleAddTopicClicked}>New Topic</button>
          </section>
          <section className="topics-list">
            <h2 className="header-text">Topics</h2>
            <TopicsList />
          </section>
        </>
      ) 
    } else if (selectedStart === true && addingTopic === true) {
      console.log('got to add topic')
      return (
        <section className="addTopicSection">
          <h2 className="header-text">Create your new topic!</h2>
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
        <div className="dungeonmistress">
          <img src={dungeonmistress} alt="dungeonmistress" className="dungeon-mistress"/>
          <div className="typewriter">
              <h1>Welcome, adventurer!</h1>
            </div>
        </div>
        <section>
          {this.renderPages()}
        </section>
      </main>
    )
  }
}

export default Landing;


