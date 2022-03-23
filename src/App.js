import logo from "./logo.svg";
import "./App.css";
import dlbia from "./image/dlbia.jpeg";
import data from "./data.js";
console.log(data);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={dlbia} className="logo-oasis" />
        </div>
        <div>
          <h3>Don't Look Back In Anger</h3>
          <h6>Oasis</h6>
        </div>

        <select name="list" id="list">
          <option value="musik">Don't Look Back In Anger</option>
          <option value="musik">Stand by Me</option>
        </select>
      </header>
    </div>
  );
}
export default App;
