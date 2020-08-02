import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import NewNav from './components/NewNav/NewNav.js';
import DetailedTopic from './components/DetailedTopic/DetailedTopic.js';
import TopicsList from './components/TopicsList/TopicsList.js';
// import './app.css';

class App extends React.Component {
  render() {
    return (
      <>
        <main class="content-wrapper">
          <Landing />
        </main>
      </>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
