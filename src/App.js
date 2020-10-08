import React from 'react';
import logo from './logo.svg';
import './App.css';
import Evaluator from './evaluator/formula_evaluator';

function App() {
  function evaluate(e) {
    e.preventDefault();
    console.log(document.getElementById('expression').value)
    var result = Evaluator.eval(document.getElementById('expression').value.trim());
    console.log('the result value is ', result);
    document.getElementById('result').innerHTML = result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A react calculator application</h1>
        <input name="expression" id="expression" placeholder='Enter an expression and press "calculate" button'></input>
        <button onClick={evaluate} className="btn">
          <span>calculate</span>
        </button>
        <h1 id="result">Result expression</h1>
      </header>
    </div>
  );
}

export default App;
