import React from 'react';
import {connect} from 'react-redux';
import {ConnectedExpenseListItem} from './ExpenseListItem.js';
import {getVisibleExpenses} from '../selectors/expenses.js';

const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expense</p>
      ) : (
      props.expenses.map((expense) => {
      // console.log(expense);
       return <ConnectedExpenseListItem key={expense.id} {...expense}/>
      })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export {ConnectedExpenseList, ExpenseList};