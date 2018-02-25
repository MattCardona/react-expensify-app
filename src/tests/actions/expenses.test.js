import {addExpense, editExpense, removeExpense} from '../../actions/expenses.js';
import uuid from 'uuid';

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
  const action = addExpense({description: 'test', note: 'testing', amount: 0, createdAt: 0});
  const uuId = action.expense.id
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuId,
      description: 'test',
      note: 'testing',
      amount: 0,
      createdAt: 0
    }
  });
});

test("it should add a empty object when no value passed to addExpense", () => {
  const action = addExpense();
  const uuId = action.expense.id;
  expect(action).toEqual({
   type: 'ADD_EXPENSE',
    expense: {
    id: uuId,
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  });
});