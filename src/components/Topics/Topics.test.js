import React from 'react';
import ReactDOM from 'react-dom';
import Topics from './Topics';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <Topics />
  </Router>, div);
});