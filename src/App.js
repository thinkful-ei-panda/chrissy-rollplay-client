import React from 'react';
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import DetailedTopic from './components/DetailedTopic/DetailedTopic';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="content-wrapper">
          <Route exact path='/' component={Landing} />

          <Route exact path='/topics/:id' component={DetailedTopic} />
        </main>
      </>
    )
  }
}

export default App;
