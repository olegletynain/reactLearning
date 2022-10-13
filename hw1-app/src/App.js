import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HW 1 Oleg Letianin.
        </p>
          <p>
            Learn React - components
          </p>
          <View children={[<SearchBar Name="Search"/>]}></View>          
          <Counter text="0" Id="counter"></Counter>
          <View children={[
            <Button sign="+" handler={UpdateCount}></Button>,
            <Button sign="-" handler={UpdateCount}></Button>
          ]}>
          </View>
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
