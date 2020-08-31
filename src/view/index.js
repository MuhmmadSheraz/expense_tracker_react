import React from "react";
import Header from "../components/Header";
import CurrentBalance from "../components/CurrentBalance";
import Transaction from "../components/Transaction";
import TrasactionHistory from "../components/TransactionHistory";
import TransactionInput from "../components/TransactionInput";

let TrackerView = () => {
  return (
    <div className="abc">
      <CurrentBalance />
      <Transaction />
        <p className="secName_History">History</p>
        <hr className="hr" />
        <TrasactionHistory />
        <p className="secName_History">Add New Transaction</p>
        <hr className="hr" />
      <div className="ContentBody">
        <TransactionInput />
      </div>
    </div>
  );
};

export default TrackerView;
