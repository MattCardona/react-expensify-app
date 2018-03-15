import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage.js';
import expenses from '../fixtures/expenses.js';

let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  history = {push: jest.fn()};
  startRemoveExpense = jest.fn();
  wrapper = shallow(<EditExpensePage expense={expenses[0]} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history}/>);
});

test("should render the EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});