import React from 'react';
import './nav.css';
import rollplayblack from '../img/rollplayblack.png';

class NewNavigation extends React.Component {
  render() {
    return (
      <>
      <nav className="nav-bar">
        <div className="nav-logo-box">
          <img src={rollplayblack} alt="logo" class="nav-logo"/>
        </div>
        <div class="user-display">
          <p>Hi, Username!</p>
          <button type="button" role="logout" class="nav-button logout">Log Out</button>
        </div>
      </nav>
      </>
    )
  }
}

export default NewNavigation;