import React from 'react';
import ReactDOM from 'react-dom';
import EditTopic from './editTopic';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <EditTopic />
  </Router>, div);
});