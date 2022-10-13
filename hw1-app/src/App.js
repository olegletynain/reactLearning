import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Hello React</p>
        </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter text="0" Id="counter"></Counter>
          <div className='.view'>
            <Button sign="+" handler={UpdateCount}></Button>
            <Button sign="-" handler={UpdateCount}></Button>
          </div>
      </header>
    </div>
  );
}

function UpdateCount(val) {
  const element = document.getElementById("counter");
  if(element) {
    let value = parseInt(element.innerHTML);
    if(!isNaN(value)) {
      let newVal = value + (val);
      element.innerHTML = newVal;
    }
  }
}

export default App;
