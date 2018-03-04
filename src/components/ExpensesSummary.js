import React from 'react';
import {connect} from 'react-redux';
import {getVisibleExpenses} from '../selectors/expenses.js';
import {getExpenseTotal} from '../selectors/expenses-total.js';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h3>Viewing {props.expenseCount} {expenseWord},
      totalling {props.expenseTotal}
      </h3>
    </div>
)};

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  const total = numeral(getExpenseTotal(expenses)/ 100).format('$0,0.00');
  return {
        expenseCount: expenses.length,
        expenseTotal: total
      }
};

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export {ExpensesSummary, ConnectedExpensesSummary};