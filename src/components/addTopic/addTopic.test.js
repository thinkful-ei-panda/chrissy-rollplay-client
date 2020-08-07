import React from 'react';
import ReactDOM from 'react-dom';
import AddTopic from './addTopic';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <AddTopic />
  </Router>, div);
});