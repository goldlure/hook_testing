import React from "react";
import ReactDOM from "react-dom";
import Hook from "./Hook";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
