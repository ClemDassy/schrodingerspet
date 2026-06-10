import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function ResultDisplay(props) {
  const results = props.results;

  if (results.length === 0) {
    return <p>Superposition</p>;
  }

  const cat1Count = results.filter(r => r === "cat1").length;
  const cat2Count = results.filter(r => r === "cat2").length;

  const total = results.length
  const cat1Pct = total ? (cat1Count/total)* 100 : 0
  const cat2Pct = total ? (cat2Count/total) *100 : 0

  return (
    <p>
      cat2 = {cat2Count} and cat1 = {cat1Count} <br />
    
      as you click, this should go towards 50 percent:  <br />
      {cat1Pct}% of pets were on cat1
    </p>
  );



}

  function Box() {
    return <div> The BOOOOOX</div>
  }

function App() {
  const [results, setResults] = useState([])


  function handleOpenBox() {
    const outcome = Math.random()<0.5? "cat1" : "cat2"
    setResults(prev => [... prev, outcome]);
}

  const resetResults = () => {
    setResults([])
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schrödinger's cat petting experiment</h1>
        <h3>Schrödinger's cat keeps dying, which is quite sad. <br />
        Instead, you are going to push a button that pets one of two cats randomly.</h3> 
        </header>
        <main>
        <Box/>

        <button
        onClick={handleOpenBox}
        //disabled={results !== null}
        > 
        Open the box!</button>

        <ResultDisplay results ={results} />

        <button onClick={resetResults}> Reset to a new universe</button>
      </main>
    </div>
  );
}




// Title
// state display
// button to open the box

// Js function Math.random()
export default App;
