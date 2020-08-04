import React, { Component } from 'react';

const TopicsListContext = React.createContext({
  topicsList: [],
  newTopic: false,
  topicDetail: false,
  // currentTopic: '',
  topicContent: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicsList: () => {},
  clearTopicsList: () => {},
  setTopicDetail: () => {},
  clearTopicDetail: () => {},
  // setCurrentTopic: () => {},
  // clearCurrentTopic: () => {},
  setTopicContent: () => {},
  clearTopicContent: () => {}
});

export default TopicsListContext;

export class TopicsListProvider extends Component {
  state = {
    topicsList: [],
    topicDetail: false,
    // currentTopic: '',
    topicContent: {},
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

  // setCurrentTopic = (currentTopic) => {
  //   this.setState({ currentTopic });
  //   console.log(currentTopic);
  // };

  // clearCurrentTopic = () => {
  //   this.setState({ currentTopic: null });
  // };

  setTopicContent = (topicContent) => {
    this.setState({ topicContent });
    console.log(topicContent);
  };

  clearTopicContent = () => {
    this.setState({ topicContent: [] });
  };

  render() {
    const value = {
      topicsList: this.state.topicsList,
      newTopic: this.state.newTopic,
      error: this.state.error,
      topicDetail: this.state.topicDetail,
      topicContent: this.state.topicContent,
      // currentTopic: this.state.currentTopic,
      setTopicsList: this.setTopicsList,
      clearTopicsList: this.clearTopicsList,
      setError: this.setError,
      clearError: this.clearError,
      setTopicDetail: this.setTopicDetail,
      clearTopicDetail: this.clearTopicDetail,
      // setCurrentTopic: this.setCurrentTopic,
      // clearCurrentTopic: this.clearCurrentTopic,
      setTopicContent: this.setTopicContent,
      clearTopicContent: this.clearTopicContent
    };
    return (
      <TopicsListContext.Provider value={value}>
        {this.props.children}
      </TopicsListContext.Provider>
    );
  }
}