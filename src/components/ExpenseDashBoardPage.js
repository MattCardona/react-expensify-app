import React from 'react';
import {ConnectedExpenseList} from './ExpenseList.js';
import {ConnectedExpenseListFilters} from './ExpenseListFilters.js';

const ExpenseDashBoardPage = () => (
  <div>
  <ConnectedExpenseListFilters />
  <ConnectedExpenseList />
  </div>
  );

export {ExpenseDashBoardPage};