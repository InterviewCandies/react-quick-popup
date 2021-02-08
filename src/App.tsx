import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "./component/Popup/Popup";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="App">
      <h1>Text</h1>
      <Popup
        open={open}
        theme="light"
        onClose={() => setOpen(false)}
        showCloseIcon={true}
        onCancel={() => setOpen(false)}
        onOK={() => alert("Hello")}
      >
        <div style={{ maxHeight: "100vh", overflow: "auto", width: "400px" }}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vero
            repellendus, magni doloribus error at enim necessitatibus aliquid!
            Autem earum fugiat laudantium aut cupiditate sed nesciunt cumque
            labore impedit illo.
          </h1>
        </div>
      </Popup>
    </div>
  );
}

export default App;
