import React, { Component } from 'react';

const TopicsListContext = React.createContext({
  topicsList: [],
  newTopic: {},
  topicDetail: false,
  topicContent: [],
  selectedStart: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicsList: () => {},
  clearTopicsList: () => {},
  setTopicDetail: () => {},
  clearTopicDetail: () => {},
  setTopicContent: () => {},
  clearTopicContent: () => {}
});

export default TopicsListContext;

export class TopicsListProvider extends Component {
  state = {
    topicsList: [],
    newTopic: {},
    topicDetail: false,
    topicContent: [],
    selectedStart: false,
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

  setTopicDetail = () => {
    this.setState({ topicDetail: true });
  };

  clearTopicDetail = () => {
    this.setState({ topicDetail: false });
  };

  setTopicContent = (topicContent) => {
    this.setState({ topicContent })
  };

  clearTopicContent = () => {
    this.setState({ topicContent: {} })
  };

  setSelectedStart = () => {
    this.setState({ selectedStart: true });
  };

  clearSelectedStart = () => {
    this.setState({ selectedStart: false });
  };

  setNewTopic = (newTopic) => {
    this.setState({ newTopic });
  };

  clearNewTopic = () => {
    this.setState({ newTopic: {} });
  };

  render() {
    const value = {
      topicsList: this.state.topicsList,
      newTopic: this.state.newTopic,
      error: this.state.error,
      topicDetail: this.state.topicDetail,
      topicContent: this.state.topicContent,
      selectedStart: this.state.selectedStart,
      setTopicsList: this.setTopicsList,
      clearTopicsList: this.clearTopicsList,
      setError: this.setError,
      clearError: this.clearError,
      setTopicDetail: this.setTopicDetail,
      clearTopicDetail: this.clearTopicDetail,
      setSelectedStart: this.setSelectedStart,
      clearSelectedStart: this.clearSelectedStart,
      setNewTopic: this.setNewTopic,
      clearNewTopic: this.clearNewTopic,
      setTopicContent: this.setTopicContent,
      clearTopicContent: this.clearNewTopic
    };
    return (
      <TopicsListContext.Provider value={value}>
        {this.props.children}
      </TopicsListContext.Provider>
    );
  }
}