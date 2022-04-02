import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter, changeCounter] = useState(2)
  window.changeCounter = changeCounter
  return (
    <div className="App">
      <h1>{counter}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
