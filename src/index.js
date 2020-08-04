import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TopicsListProvider } from './contexts/TopicsContext';
import { LandingProvider } from './contexts/LandingContext';
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <LandingProvider>
      <TopicsListProvider>
          <App />
      </TopicsListProvider>
    </LandingProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// import Header from './components/Header/Header.js';
// import NewNavigation from './components/NewNav/NewNav.js';
// import TopicsList from './components/TopicsList/TopicsList.js';
// import Landing from './components/Landing/Landing.js';