import React from 'react';
import ReactDOM from 'react-dom';
import EditComment from './editComment';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <EditComment />
  </Router>, div);
});