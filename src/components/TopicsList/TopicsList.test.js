import React from 'react';
import ReactDOM from 'react-dom';
import TopicsList from './TopicsList';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicsList />, div);
});