import React, {useContext}from "react";
import "./currentBalance.css";
import { GlobalContext } from "../../context/GlobalState";
let CurrentBalance = () => {
  const { balance } = useContext(GlobalContext);

  console.log("JSX*****",balance)
  return (
    <div className="currrntBalance">
      <span className=" Cbalance"> Current Balance :</span>
  <p className="balance green">$ {balance}</p>
    </div>
  );
};
export default CurrentBalance;

