import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TopicsListProvider } from './contexts/TopicsContext';
import { LandingProvider } from './contexts/LandingContext';
import './index.css';
import App from './App';
import { CommentsContextProvider } from './contexts/CommentsContext';


ReactDOM.render(
  <BrowserRouter>
    <LandingProvider>
      <TopicsListProvider>
        <CommentsContextProvider>
          <App />
        </CommentsContextProvider>
      </TopicsListProvider>
    </LandingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);