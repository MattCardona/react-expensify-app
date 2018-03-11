import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses.js';
import expenses from '../fixtures/expenses.js';
import {database} from '../../firebase/firebase.js';


const createMockStore = configureStore([thunk]);

test("it should remove a expense w/ removeExpense", () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test("it should edit a expense w/ editExpense", () => {
  const action = editExpense('123abc', {description: 'test', note: 'testing', amount: 0, createdAt: 0});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {description: 'test', note: 'testing', amount: 0, createdAt: 0}
  });
});

test("it should add a expense w/ addExpense", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  });
});

test("should add expense to database and store", (done) => {
  const store  = createMockStore({});
  const expenseData = {
    description: 'Mac',
    amount: 300000,
    note: 'This is new',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store  = createMockStore({});
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

// test("it should add a empty object when no value passed to addExpense", () => {
//   const action = addExpense();
//   const uuId = action.expense.id;
//   expect(action).toEqual({
//    type: 'ADD_EXPENSE',
//     expense: {
//     id: uuId,
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   }
//   });
// });