import logo from './logo.svg';
import './App.css';
import GentData from '../components/GentDataParser';


function App() {
  return (
    <div className="App">
      <header>
        <h1>My app</h1>
        <GentData/>
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
      </header>
    </div>
  );
}

export default App;
