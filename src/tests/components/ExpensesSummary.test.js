import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary.js';
import expenses from '../fixtures/expenses.js';

test("should view 2 expenses totalling $4,695.00", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={'$4,695.00'} />);
  expect(wrapper).toMatchSnapshot();
});

test("should view 1 expense totalling $195.00", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={'$195.00'}/>);
  expect(wrapper).toMatchSnapshot();
});