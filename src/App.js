import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './utils/private-route';
import PublicRoute from './utils/public-route';
import Landing from './components/Landing/Landing';
import DetailedTopic from './components/DetailedTopic/DetailedTopic.js';
import TopicsList from './components/TopicsList/TopicsList.js';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="content-wrapper">
          <PrivateRoute exact path='/topics' component={TopicsList} />

          <PrivateRoute path='/topics/:id' component={DetailedTopic} />

          <PublicRoute exact path='/' component={Landing} />
        </main>
      </>
    )
  }
}

export default App;
