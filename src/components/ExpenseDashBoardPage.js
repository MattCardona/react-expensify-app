import React from 'react';
import {ConnectedExpenseList} from './ExpenseList.js';
import {ConnectedExpenseListFilters} from './ExpenseListFilters.js';
import {ConnectedExpensesSummary} from './ExpensesSummary.js'

const ExpenseDashBoardPage = () => (
  <div>
  <ConnectedExpensesSummary />
  <ConnectedExpenseListFilters />
  <ConnectedExpenseList />
  </div>
  );

export {ExpenseDashBoardPage};