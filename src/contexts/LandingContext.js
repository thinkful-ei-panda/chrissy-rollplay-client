import React, { Component } from 'react';
import UserService from '../services/user-service';

const LandingContext = React.createContext({
  username: "",
  loggedIn: false,
  error: null,
  isRegistering: false,
  loggingIn: false,
  handleLoginState: () => {},
  handleRegistering: () => {},
  handleLoggingIn: () => {},
  handleClearLog: () => {},
  handleClearReg: () => {}
});

export default LandingContext;

export class LandingProvider extends Component {
  state = {
    loggedIn: UserService.hasAccount(),
    registered: UserService.hasAccount(),
    error: null
  };

  saveUsername = (username) => {
    this.setState({username})
  };

  handleLoginState = (isLoggedIn) => {
    this.setState({
      loggedIn: isLoggedIn
    });
  };

  handleRegistering = (isRegistering) => {
    this.setState({
      isRegistering: true
    });
  };

  handleLoggingIn = (loggingIn) => {
    this.setState({
      loggingIn: true
    });
  };

  handleClearLog = (loggingIn) => {
    this.setState({
      loggingIn: false
    });
  };

  handleClearReg = (isRegistering) => {
    this.setState({
      isRegistering: false
    });
  };

  render() {
    const value = {
      username: this.state.username,
      loggedIn: this.state.loggedIn,
      isRegistering: this.state.isRegistering,
      error: this.state.error,
      loggingIn: this.state.loggingIn,
      saveUsername: this.saveUsername,
      handleLoginState: this.handleLoginState,
      handleRegistering: this.handleRegistering,
      handleLoggingIn: this.handleLoggingIn,
      handleClearLog: this.handleClearLog,
      handleClearReg: this.handleClearReg,
    };

    return (
      <LandingContext.Provider value={value}>
        {this.props.children}
      </LandingContext.Provider>
    );
  }
}