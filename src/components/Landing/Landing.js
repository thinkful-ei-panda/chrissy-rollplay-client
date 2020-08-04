import React from 'react';
import rollplayblack from '../img/rollplayblack.png';
import LandingForms from '../landingForms/landingForms';
import './Landing.css';

class Landing extends React.Component {

  render() {
    return (
      <main className="landing">
        <div className="landing-logo-box">
          <img src={rollplayblack} alt="logo" className="logo" />
        </div>
        <LandingForms />
      </main>
    )
  }
}

export default Landing;


