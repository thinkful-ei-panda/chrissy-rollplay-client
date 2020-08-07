import React from 'react';
import ReactDOM from 'react-dom';
import DetailedTopic from './DetailedTopic';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <DetailedTopic />
  </Router>, div);
});