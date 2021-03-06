import React from 'react';
import {connect} from 'react-redux';
import {ExpenseForm} from './ExpenseForm.js';
import {startAddExpense} from '../actions/expenses.js';

 class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
   this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
   render() {
     return (
       <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit}/>
        </div>
       </div>
    )
   }
}
const mapDispatchToProps = (dispatch) => ({
   startAddExpense: (expense) => dispatch(startAddExpense(expense))
 });

 const ConnectedAddExpensePage = connect(undefined, mapDispatchToProps)(AddExpensePage);
 export {ConnectedAddExpensePage, AddExpensePage};



