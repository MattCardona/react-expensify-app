const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state,action.expense]
    case 'REMOVE_EXPENSE':
      return state.reduce((memo, expense) => {
        if(expense.id !== action.id){
          memo.push(expense);
          return memo;
        }
        return memo;
      }, []);
    case 'EDIT_EXPENSE':
      return state.reduce((memo, expense) => {
        if(expense.id === action.id){
          memo.push({...expense, ...action.updates});
          return memo;
        }
        memo.push(expense);
        return memo;
      }, []);
    default:
      return state;
  }
};

export {expensesReducer};