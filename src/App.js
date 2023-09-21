import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [testMessage, setTestMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTestMessage(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <ul>
          {testMessage.map((val, idx) => (
            <li key={`${idx}-${val}`}>{val}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
