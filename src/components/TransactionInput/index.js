import React, { useState, useContext } from "react";
import ActionButton from "../ActionButton";
import "./input.css";
import swal from "sweetalert";
import { GlobalContext } from "../../context/GlobalState";

let TransactionInput = () => {
  const { addTransaction, transactions } = useContext(GlobalContext);

  const [userInput, setUserInput] = useState({
    description: "",
    Amount: "",
  });

  const setTrans = (e) => {
    const { name, value } = e.target;
    setUserInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  let add = () => {
    console.log(userInput);
    if (userInput.Amount == "" || userInput.description == "") {
      return swal({
        text: "Please Fill All The Fields",
        icon: "warning",
        dangerMode: true,
      });
    }
    let id = Math.floor(Math.random() * 1000);
    addTransaction({ ...userInput, id });
    setUserInput({ description: "", Amount: "" });
  };
  return (
    <>
      <div>
        <p className="secName_HistoryI">Description</p>
        <input
          value={userInput.description}
          className="inputFields"
          placeholder="Detail of Transaction"
          name="description"
          required
          onChange={(e) => {
            setTrans(e);
          }}
        />
      </div>
      <div>
        <p className="secName_HistoryI">Transaction Amount</p>
        <input
          value={userInput.Amount}
          type="number"
          className="inputFields"
          placeholder="Dollar Value of Transaction"
          name="Amount"
          required
          onChange={(e) => {
            setTrans(e);
          }}
        />
      </div>
      <ActionButton click={add} />
    </>
  );
};
export default TransactionInput;
