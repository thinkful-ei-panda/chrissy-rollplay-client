import React, { Component } from 'react';

const TopicsListContext = React.createContext({
  topicsList: [],
  newTopic: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicsList: () => {}
});

export default TopicsListContext;

export class TopicsListProvider extends Component {
  state = {
    topicsList: [],
    newTopic: false,
    error: null
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTopicsList = (topicsList) => {
    this.setState({ topicsList });
  };

  clearTopicsList = () => {
    this.setState({ topicsList: [] });
  };

  setNewTopic = () => {
    this.setState({ newTopic: true });
  };

  clearNewTopic = () => {
    this.setState({ newTopic: false });
  };

  render() {
    const value = {
      topicsList: this.state.topicsList,
      newTopic: this.state.newTopic,
      error: this.state.error,
      setTopicsList: this.setTopicsList,
      clearTopicsList: this.clearTopicsList,
      setError: this.setError,
      clearError: this.clearError,
      setNewTopic: this.setNewTopic,
      clearNewTopic: this.clearNewTopic
    };
    return (
      <TopicsListContext.Provider value={value}>
        {this.props.children}
      </TopicsListContext.Provider>
    );
  }
}