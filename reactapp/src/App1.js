import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className='header'>
          Hello, World!
        </h1>
        <p>Lorem</p>
      </div>
    );
  }
  // return <h1 className='header'>Hello, world</h1>
  // return React.createElement('h1', {class: 'header'}, 'Hello World!')
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
