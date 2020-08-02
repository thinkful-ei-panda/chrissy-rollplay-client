import React from 'react';
import FrontPageHeader from './FrontPageHeader.js';
import LoggedInHeader from './LoggedInHeader.js';
import './header.css';
import { render } from '@testing-library/react';

class Header extends React.Component {
    render() {
      return (
        <header>
          <FrontPageHeader />
        </header>
      )
    }
  }

export default Header;