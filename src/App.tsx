import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "./component/Popup/Popup";

function App() {
  return (
    <div className="App">
      <h1>Text</h1>
      <Popup open={true}>
        <h1>ddfgdfg</h1>
      </Popup>
    </div>
  );
}

export default App;
