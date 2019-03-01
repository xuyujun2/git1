// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;






import React, { Component } from 'react';
import Layout from './container/layout';
import Routes from './routes/routes.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Routes/>       
        </div>
      </Router>
      </div>
    )
  }
}

export default App
