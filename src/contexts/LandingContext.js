import React, { Component } from 'react';

const LandingContext = React.createContext({
  selectedStart: false,
  error: null
});

export default LandingContext;

export class LandingProvider extends Component {
  state = {
    selectedStart: false,
    error: null
  };

  setSelectedStart = () => {
    this.setState({ selectedStart: true });
  };

  clearSelectedStart = () => {
    this.setState({ selectedStart: false });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      topicsList: this.state.topicsList,
      error: this.state.error,
    };

  return (
    <LandingContext.Provider value={value}>
      {this.props.children}
    </LandingContext.Provider>
  )
}
}