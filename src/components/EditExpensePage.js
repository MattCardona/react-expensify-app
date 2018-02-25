import React from 'react';
import {connect} from 'react-redux';
import {ExpenseForm} from './ExpenseForm.js';
import {editExpense} from '../actions/expenses.js';
import {removeExpense} from '../actions/expenses.js';



class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClickRemove = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <button onClick={this.onClickRemove}>Remove</button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
  removeExpense: (expenseId) => dispatch(removeExpense({id: expenseId}))
});

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ExpenseForm expense={props.expense} onSubmit={(expense) => {
//         console.log('updating ', expense);
//         props.dispatch(editExpense(props.expense.id, expense));
//         props.history.push('/');
//       }}/>
//       <button onClick={()=>{
//       // console.log('props', props);
//       props.dispatch(removeExpense({id: props.expense.id}));
//       props.history.push('/');
//     }}>Remove</button>
//     </div>
//   );
// }

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//   }
// };

const ConnectedEditExpensePage = connect(undefined, mapDispatchToProps )(EditExpensePage);
export {ConnectedEditExpensePage, EditExpensePage};