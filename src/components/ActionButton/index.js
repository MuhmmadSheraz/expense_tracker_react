import React from "react";
import "./actionBtn.css";
let ActionButton = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button className="addTransaction" onClick={props.click}>
        Add Transaction
      </button>
    </div>
  );
};
export default ActionButton;
