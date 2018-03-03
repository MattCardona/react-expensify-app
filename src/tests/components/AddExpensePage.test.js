import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage.js';
import expenses from '../fixtures/expenses.js';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[2]);
});