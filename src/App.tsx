import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "./component/Popup/Popup";
import { PopupSettings } from "./type";
const settings: PopupSettings = {
  paper: {
    backgroundColor: "#fff",
    boxShadow: "none",
    border: "1px solid #000",
  },
  okButton: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "20px",
  },
};
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <h1>Text</h1>
      <button onClick={() => setOpen(true)}>open modal</button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        showCloseIcon={true}
        onCancel={() => setOpen(false)}
        onOK={() => alert("Hello")}
        settings={settings}
      >
        <div style={{ maxHeight: "100vh", overflow: "auto", width: "400px" }}>
          <p> You nedd to chill out!</p>
        </div>
      </Popup>
    </div>
  );
}

export default App;
