import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [{
    id: 'kabsdbasb',
    description: 'januarys rent',
    note: 'This is the finale payment for that address',
    amount: 54555,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}




// // ADD_EXPENSE
// const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// // REMOVE_EXPENSE
// const removeExpense = ({id} = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// // EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });

// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });

// // SORT_BY_DATE
// const sortByDate = () => ({
//   type: 'SORT_BY_DATE',
//   sortBy: 'date'
// });

// // SORT_BY_AMOUNT
// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT',
//   sortBy: 'amount'
// });

// // SET_START_DATE
// const setStartDate = (date = undefined) => ({
//   type: 'SET_START_DATE',
//   date
// });

// // SET_END_DATE
// const setEndDate = (date = undefined) => ({
//   type: 'SET_END_DATE',
//   date
// });

//Expense Reducer
// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch(action.type) {
//     case 'ADD_EXPENSE':
//       return [...state,action.expense]
//     case 'REMOVE_EXPENSE':
//       return state.reduce((memo, expense) => {
//         if(expense.id !== action.id){
//           memo.push(expense);
//           return memo;
//         }
//         return memo;
//       }, []);
//     case 'EDIT_EXPENSE':
//       return state.reduce((memo, expense) => {
//         if(expense.id === action.id){
//           memo.push({...expense, ...action.updates});
//           return memo;
//         }
//         memo.push(expense);
//         return memo;
//       }, []);
//     default:
//       return state;
//   }
// };

// const filterReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };
//
//Filter Reducer
// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch(action.type) {
//     case 'SET_TEXT_FILTER':
//       return {...state, text: action.text};
//     case 'SORT_BY_DATE':
//       return {...state, sortBy: action.sortBy};
//     case 'SORT_BY_AMOUNT':
//       return {...state, sortBy: action.sortBy};
//     case 'SET_START_DATE':
//       return {...state, startDate: action.date};
//     case 'SET_END_DATE':
//       return {...state, endDate: action.date};
//     default:
//     return state;
//   }
// };

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//     const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//     if(sortBy === 'date'){
//       return a.createdAt < b.createdAt ? 1 : -1;
//     }else if(sortBy === 'amount'){
//       console.log('amount');
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };

// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer
//   })
// );

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Food', amount: 1100, createdAt: -1000}));
// // console.log(expenseOne);
// const expenseThree = store.dispatch(addExpense());
// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 10, note: 'u just did it'}));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());

// store.dispatch(setEndDate(99));
// store.dispatch(setEndDate());