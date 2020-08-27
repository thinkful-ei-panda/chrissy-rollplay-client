import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './CommentsList';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <CommentsList />
  </Router>, div);
});