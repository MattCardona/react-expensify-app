import {expensesReducer} from '../../reducers/expenses.js';
import expenses from '../fixtures/expenses.js';

test("should set default state", () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '4'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add a expense", () => {
  const expense = {
    id: '4',
    description: 'test',
    note: 'testing',
    amount: 5,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit a expense", () => {
  const updates = {
    note: 'testing edit expense'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(updates.note);
});

test("should not edit a expense if expense not found", () => {
  const updates = {
    note: 'testing edit expense'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});