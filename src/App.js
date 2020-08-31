import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TrackerView from "./view";
import {GlobalProvider} from "./context/GlobalState.js";

function App() {
  return (
    <GlobalProvider>
      <div className="App-header">
        <div className="wrapper">
          <TrackerView className="abc" />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
