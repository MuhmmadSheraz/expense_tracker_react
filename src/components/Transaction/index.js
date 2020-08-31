import React, { useContext } from "react";
import "./transaction.css";
import { GlobalContext } from "../../context/GlobalState";
let Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  transactions.map((x) => {
    x.Amount > 0 ? (income += parseFloat(x.Amount)) : (expense += parseFloat(x.Amount));
  });
  console.log(income, expense);
  return (
    <div className="transactionBox">
      <div className="content">
        Income <p className="green">$ {income} </p>
      </div>
      <div className="content">
        Expense <p className="red">$ {Math.abs(expense)} </p>
      </div>
    </div>
  );
};
export default Transaction;
