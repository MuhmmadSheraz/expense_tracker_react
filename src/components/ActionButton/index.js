import React from "react";
import "./actionBtn.css";
let ActionButton = () => {
  let hello = () => {
    console.log("action******");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button className="addTransaction" onClick={hello}>
        {" "}
        Add Transaction{" "}
      </button>
    </div>
  );
};
export default ActionButton;
