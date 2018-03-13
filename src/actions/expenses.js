import uuid from 'uuid';
import {database} from '../firebase/firebase.js';

// ADD_EXPENSE
const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
    const expense = {description, note, amount, createdAt};

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const startRemoveExpense = ({id} = {}) => {
  console.log(`Hey this id: id from actions ${id.id}`);
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      console.log('Data was removed');
      dispatch(removeExpense({id}));
    }).catch((e) => {
      console.log(`Their was a error: ${e}`);
    });
  }
};

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


//SET_EXPENSES
const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const dbExpenses = [];
      snapshot.forEach((child) => {
        dbExpenses.push({
          id: child.key,
          ...child.val()
        });
      dispatch(setExpenses(dbExpenses));
      });
    });

  }
};

export {addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense, setExpenses, startSetExpenses};