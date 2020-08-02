import React from 'react';
import rollplayblack from '../img/rollplayblack.png';
import './Landing.css';

class Landing extends React.Component {

  state = {
    loggingIn: false,
    registering: false
  }

  loginClicked() {
    console.log('loginClicked fired');
    if (this.state.loggingIn === true) {
      console.log('came up true');
      document.getElementById("login-input").classList.toggle('hidden');
    }
  }

  handleLogin = (e) => {
    console.log('handleLogin fired');
    this.setState(
      {

        loggingIn: true,

      });
      console.log(this.state.loggingIn)
    this.loginClicked(e)
  };
  
  render() {
    return (
      <main className="landing">
        <div className="landing-logo-box">
          <img src={rollplayblack} alt="logo" className="logo" />
        </div>
        <div className="user-forms">
          <form className="registration">
            <textarea className="new-username landing-button hidden" id="reg-input" placeholder="New Username" />
            <textarea className="new-password landing-button hidden" id="reg-input" placeholder="New Password" />
          </form>
          <form className="existing-user">
            <textarea className="username landing-button hidden" id="login-input"  placeholder="Username" />
            <textarea className="password landing-button hidden" id="login-input" placeholder="Password" />
          </form>
        </div>
        <div className="user-buttons">
          <button type="submit" className="login landing-button" onClick={this.handleLogin}>Log In</button>
        </div>
        <div className="user-buttons">
          <button type="submit" className="register landing-button">Register</button>
        </div>
      </main>
    )
  }
}

export default Landing;