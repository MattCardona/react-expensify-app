const getExpenseTotal = (expensesArr) => {
  const total = expensesArr.reduce((memo, currVal) => {
    memo += currVal.amount;
    return memo;
  },0);
  return total;
};

export {getExpenseTotal};