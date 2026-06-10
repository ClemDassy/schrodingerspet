import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function ResultDisplay(props) {
  if (props.result ==null) {
    return <p> Superposition</p>;
  }
  else {
    return <p>{props.result}</p>;
  }
  }

  function Box() {
    return <div> The BOOOOOX</div>
  }

function App() {
  const [result, setResult] = useState(null)


  function handleOpenBox() {
    const outcome = Math.random()<0.5? "alive" : "dead"
    setResult(outcome);
}

  

  const resetResult = () => {
    setResult(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Schrödinger's cat</h1>
        <h3>Is it dead or alive?</h3> 
        </header>
        <main>
        <Box/>

        <button
        onClick={handleOpenBox}
        disabled={result !== null}> 
        Open the box!</button>

        <ResultDisplay result ={result} />

        <button onClick={resetResult}> Reset result</button>
      </main>
    </div>
  );
}




// Title
// state display
// button to open the box

// Js function Math.random()
export default App;
