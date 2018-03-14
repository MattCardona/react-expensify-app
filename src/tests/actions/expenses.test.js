import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, startEditExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses} from '../../actions/expenses.js';
import expenses from '../fixtures/expenses.js';
import {database} from '../../firebase/firebase.js';


const createMockStore = configureStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expenseData[id] = {description, note, amount, createdAt};
  });
  database.ref('expenses').set(expenseData).then(() => done());
});

test("it should remove a expense w/ removeExpense", () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test("it should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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

test("it should edit expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = {
    note: 'Added note to test startEditExpense'
  };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect({id: snapshot.key,...snapshot.val()}).toEqual({...expenses[0], ...updates});
    done();
  })
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

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test("should fetch expenses from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});