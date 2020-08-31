export default (state, action) => {
    console.log("Reducer****",action.payload.currBalance)
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
        balance:action.payload.currBalance  
    };
    case "DELETE_TRANSACTION":
        return {
            ...state,
            transactions: state.transactions.filter((x) => x.id !== action.payload.id),
            balance:action.payload.currBalance ,
      };
    default:
      return state;
  }
};
