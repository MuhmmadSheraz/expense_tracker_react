import React, { useState } from "react";
import "./transactionHistory.css";
let TrasactionHistory = () => {
  //   const [isShown, setIsShown] = useState(false);
  return (
    <div className="historyWrapper">
      <div className="history1">
        <p>Ali Khan Saab</p>
        <p> 100000 PKR </p>

        <span className="deleteBtn red">X</span>
      </div>
      <div className="history1">
        <p>Ali Khan Saab</p>
        <p> 100000 PKR </p>

        <span className="deleteBtn red">X</span>
      </div>
      <div className="history1">
        <p>Ali Khan Saab</p>
        <p> 100000 PKR </p>

        <span className="deleteBtn red">X</span>
      </div>
      <div className="history1">
        <p>Ali Khan Saab</p>
        <p> 100000 PKR </p>

        <span className="deleteBtn red">X</span>
      </div>
    </div>
  );
};

export default TrasactionHistory;
