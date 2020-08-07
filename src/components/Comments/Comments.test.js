import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <Comments />
  </Router>, div);
});