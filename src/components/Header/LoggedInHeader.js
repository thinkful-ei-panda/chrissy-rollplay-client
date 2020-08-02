import React from 'react';

class LoggedInHeader extends React.Component {
  render() {
    return (
      <div class="flex-row">
        <p>EXP: 0/100</p>
        <h2>Username</h2>
      </div>
    )
  }
}

export default LoggedInHeader;