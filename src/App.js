import './App.css';
import { useState } from 'react';
import cat1Img from './assets/cat1.png'
import cat2Img from './assets/cat2.png'


function Box({ lastResult }) {
  if (!lastResult) {
    return <div className="box">🐾 No cat yet</div>;
  }
  
  const catJustPet = lastResult ==="cat1" ? "Corail": "Rhubarbe"
  return (
    <div className="box">
      <img
      src={lastResult === "cat1" ? cat1Img : cat2Img}
      alt = "cat"
      className = "cat-img"/>
      <br />
      <p>Congratulations! You just petted {catJustPet}!</p>
    </div>
  );
}

function Stats({results}) {
  const cat1Count = results.filter(r => r === "cat1").length;
  const cat2Count = results.filter(r => r === "cat2").length;
  const total = results.length
  const cat1Pct = total ? (cat1Count/total)* 100 : 0
  const cat2Pct = total ? (cat2Count/total) *100 : 0
  
  return (
    <div className= "stats">
      <h3>Experiment Statistics </h3>

      <p>Total pets: {total}</p>

      <p>Corail: {cat1Count} ({cat1Pct.toFixed(1)}%)</p>

      <p> Rhubarbe: {cat2Count} ({cat2Pct.toFixed(1)}%)</p>
      </div>
  )
}

function ConvergenceGraph({ data, probCorail }) {
  return (
    <div className="graph-container">

      <h3 className="graph-title">
        Convergence of Corail over time
      </h3>

      <div className="graph-area">

        <div
          className="equilibrium-line"
          style={{ top: `${(1 - probCorail) * 100}%` }}
        />

        <div className="graph">
          {data.map((value, i) => (
            <div
              key={i}
              className="bar"
              style={{ height: `${value}%` }}
              title={`${value.toFixed(1)}%`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

function App() {
  const [results, setResults] = useState([])
  const lastResult = results[results.length - 1]; 
  const [probCorail, setProbCorail] = useState(0.5)

  function handleOpenBox() {
    const outcome = Math.random()<probCorail? "cat1" : "cat2"
    setResults(prev => [...prev, outcome]);
}


  const resetResults = () => {
  setResults([]);
  setProbCorail(0.5);
};

  const convergenceData = results.map((_, index) => {
  const slice = results.slice(0, index + 1);
  const cat1Count = slice.filter(r => r === "cat1").length;
  return (cat1Count / slice.length) * 100;
});

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schrödinger's cat petting experiment</h1>
        <h3>Schrödinger's cat keeps dying, which is quite sad. <br />
        Instead, you are going to push a button that pets one of two cats randomly.</h3> 
        </header>
        <main className = "layout">
          <div className= "top-row">
            <Box
            lastResult={lastResult}/>
            <div className="buttons-column">
              <button onClick={handleOpenBox} > {results.length===0 ?
                                                    "Pet a random cat!" : "Pet another random cat "}</button>
              <button onClick={resetResults}> Reset to a new universe</button>
              <div className="slider-container">
                <label>Corail's probability to be petted: {Math.round(probCorail*100)}% </label>
                <input
                type = "range"
                min="0"
                max="1"
                step="0.01"
                value={probCorail}
                onChange={(e)=> setProbCorail(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <Stats results={results} />
          </div>
          <div className = "bottom-row">
            <ConvergenceGraph data={convergenceData}
            probCorail={probCorail}/>
          </div>
      </main>
    </div>
  );
}



// Js function Math.random()
export default App;
