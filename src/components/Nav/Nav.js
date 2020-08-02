import React from 'react';
import rollplayblack from '../img/rollplayblack.png';

class Navigation extends React.Component {
  render() {
    return (
      <>
      <nav className="navigationnav-bar">
        <div className="logo-box">
          <img src={rollplayblack} alt="logo" class="left"/>
        </div>
        <button type="button" role="logout" class="logout-button right">Log Out</button>
      </nav>
      </>
    )
  }
}

export default Navigation;