import React, { useState } from "react";
import "./input.css";

let TransactionInput = () => {
  const [userInput, setUserInput] = useState({
    description: "",
    Amount: "",
  });

  const addTrans = (e) => {
    const {name,value}=e.target
    setUserInput((preValue)=>{
        return {
            ...preValue,
            [name]:value
        }
    })
    console.log(userInput)
};
  return (
    <>
      <div>
        <p className="secName_HistoryI">Description</p>
        <input
          className="inputFields"
          placeholder="Detail of Transaction"
          name="description"
          required
          onChange={(e) => {
            addTrans(e);
          }}
        />
      </div>
      <div>
        <p className="secName_HistoryI">Transaction Amount</p>
        <input
          type="number"
          className="inputFields"
          placeholder="Dollar Value of Transaction"
          name="Amount"
          required
          onChange={(e) => {
            addTrans(e);
          }}
        />
      </div>
    </>
  );
};
export default TransactionInput;
