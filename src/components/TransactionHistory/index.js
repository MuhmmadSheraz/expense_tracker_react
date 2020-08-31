import React, { useState, useContext } from "react";
import "./transactionHistory.css";
import { GlobalContext } from "../../context/GlobalState";
let TrasactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  let deleteHistory = (id, Amount) => {
    deleteTransaction(id, Amount);
    console.log(id);
  };
  return (
    <div className="historyWrapper">
      {transactions.length ?
      transactions.map((x, index) => {
        console.log(x.id);
        return x.Amount < 0 ? (
          <div key={index} className="historyEx">
            <p>{x.description}</p>
            <p> $ {Math.abs(x.Amount)} </p>
            <span
              className="deleteBtn"
              onClick={() => deleteHistory(x.id, x.Amount)}
            >
              X
            </span>
          </div>
        ) : (
          <div key={index} className="historyIn">
            <p>{x.description}</p>
            <p>$ {x.Amount} </p>
            <span
              className="deleteBtn"
              onClick={() => deleteHistory(x.id, x.Amount)}
            >
              X
            </span>
          </div>
        );
      })
      :<p className="noHistory">No History Found !</p>}
    </div>
  );
};

export default TrasactionHistory;
