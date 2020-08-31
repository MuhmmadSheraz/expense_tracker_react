import React, { useReducer, createContext } from "react";
import Reducer from "./Reducer.js";

const initialState = {
  transactions: [],
  balance: 0,
};

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  //Use Reducer
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addTransaction(transaction) {
    let currBalance = state.balance + parseFloat(transaction.Amount);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { transaction, currBalance },
    });
  }
  function deleteTransaction(id,Amount) {
       let currBalance = state.balance - Amount;
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {id,currBalance}
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        balance: state.balance,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
