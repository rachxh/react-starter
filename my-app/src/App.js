
import './App.css';

let counter = 0;

function increment() {
  console.log("increment");
  let countEl = document.getElementById("count-el");
  counter++;
  countEl.textContent = counter;
}

function save() {
  console.log("save");
  let logEl = document.getElementById("log-el");
  let countEl = document.getElementById("count-el");
  logEl.textContent += counter + " - ";
  counter = 0;
  countEl.textContent = counter;
}


function App() {
  return (
    <div className="App">
      <h1>People entered: </h1>
      <h2 id="count-el">0</h2>
      <button id="incremental-btn" onClick={increment}>INCREMENT</button>
      <button id="save-btn" onClick={save}>Save</button>
      <p id="log-el">Previous entries: </p>
    </div>
  );
}

export default App;
