import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage.js';
import expenses from '../fixtures/expenses.js';

let editExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  history = {push: jest.fn()};
  startRemoveExpense = jest.fn();
  wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} startRemoveExpense={startRemoveExpense} history={history}/>);
});

test("should render the EditExpensePagePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});