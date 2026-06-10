import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {
  const [result, setResult] = useState(null)


  function handleOpenBox() {
    const outcome = Math.random()<0.5? "alive" : "dead"
    setResult(outcome);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Schrödinger's cat</h1>
        <h2>Is it dead or alive?</h2> 

        <div>Here is a picture of the box</div>

        <button onClick={handleOpenBox}> Open the box!</button>

        <p> {result}</p>
      </header>
    </div>
  );
}




// Title
// state display
// button to open the box

// Js function Math.random()
export default App;
