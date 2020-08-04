import React, { Component } from 'react';
import LandingContext from '../../contexts/LandingContext';
import AuthApiService from '../../services/auth-api-service';
import UserService from '../../services/user-service';



class LandingForms extends Component {

  static contextType = LandingContext;
  constructor(props) {
    super(props);
    this.state = {
      usernameToSubmit: "",
      passwordToSubmit: "",
      newUsernameToSubmit: "",
      newPasswordToSubmit: "",
      error: "An error!"
    }
  }

  getUsername() {
    this.setState({usernameToSubmit: document.getElementById('login-username-input').value})
  }

  getPassword() {
    this.setState({usernameToSubmit: document.getElementById('login-password-input').value})
  }

  getNewUsername() {
    console.log('getNewUsername fired')
    console.log(document.getElementById('reg-username-input').value)
    this.setState({usernameToSubmit: document.getElementById('reg-username-input').value})
  }

  getNewPassword() {
    console.log('getNewPassword fired')
    console.log(document.getElementById('reg-password-input').value)
    this.setState({usernameToSubmit: document.getElementById('reg-password-input').value})
  }

  handleLoginClick = () => {
    console.log('handleLoginClick fired')
    const { usernameToSubmit, passwordToSubmit } = this.state;
      this.setState({usernameToSubmit: document.getElementById('reg-username-input').value, passwordToSubmit: document.getElementById('reg-password-input').value})
    if (usernameToSubmit && passwordToSubmit) {
      this.handleLoginSubmit(usernameToSubmit, passwordToSubmit);
    }
  }

  // handleRegisterClick = (username, password) => {
  //   AuthApiService.postLogin({
  //     username,
  //     password
  //   })
  //     .then((res) =>{
  //       this.props.onLoginSuccess();
  //       this.props.history.push("/topics");
  //     })
  //     .catch((res) => {
  //       this.setState({ error: res.error })
  //     })
  // }

  handleLoginSubmit = (username, password) => {
      AuthApiService.postLogin({
        username,
        password
      })
        .then((res) =>{
          UserService.saveUsername();
          this.props.history.push("/topics");
        })
        .catch((res) => {
          this.setState({ error: res.error })
        })
  }

  handleChangeUser = (event) => {
    console.log('handleChangeUser fired')
    this.setState({usernameToSubmit: event.target.value});
  }

  handleChangePass = (event) => {
    console.log('handleChangePass fired')
    this.setState({passwordToSubmit: event.target.value});
  }

  // handleRegistrationSubmit() {

  // }

  renderLandingForm() {
    console.log('renderlandingform fired');
    const { loggingIn, isRegistering, handleLoggingIn, handleRegistering, handleClearLog, handleClearReg } = this.context;
    const { usernameToSubmit, passwordToSubmit } = this.state;

    if (loggingIn && !isRegistering) {
      return (
        <form className="login-element" onSubmit={this.handleLoginSubmit(usernameToSubmit, passwordToSubmit)}>
          <input className="username landing-button" id="login-username-input" value={this.state.usernameToSubmit} onChange={this.handleChangeUser}  placeholder="Username" />
          <input className="password landing-button" id="login-password-input" value={this.state.passwordToSubmit} onChange={this.handleChangePass} placeholder="Password" />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClearLog}>Back</button>
        </form>
      )
    } else if (isRegistering && !loggingIn) {
      return (
        <form className="registration">
        <input className="new-username landing-button" id="reg-username-input" value={this.state.newUsernameToSubmit} onChange={this.handleChange} placeholder="New Username" />
        <input className="new-password landing-button" id="reg-password-input" value={this.state.newPasswordToSubmit} onChange={this.handleChange} placeholder="New Password" />
        <button type="button">Submit</button>
        <button type="button" onClick={handleClearReg}>Back</button>
      </form>
        )
    } else {
      return (
        <div>
          <button type="button" onClick={handleLoggingIn}>Log In</button>
          <button type="button" onClick={handleRegistering}>Register</button>
        </div>
      )
    }
  }
  render() {
      return (
        <div>
          {this.renderLandingForm()}
        </div>
      )
    }
  }

export default LandingForms;