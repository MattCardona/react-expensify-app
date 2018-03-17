import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getVisibleExpenses} from '../selectors/expenses.js';
import {getExpenseTotal} from '../selectors/expenses-total.js';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expenseWord},
        totalling <span>{props.expenseTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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