import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem.js';
import expenses from '../fixtures/expenses.js';

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});