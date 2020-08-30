import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TrackerView from "./view";

function App() {
  return (
    <div className="App-header">
      <div className="wrapper">
        <TrackerView className="abc" />
      </div>
    </div>
  );
}

export default App;
