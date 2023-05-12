import logo from './logo.svg';
import './App.css';
import OneCounter from './OneCounter';
import TenCounter from './TenCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <OneCounter />
        <TenCounter />
      </header>
    </div>
  );
}

export default App;