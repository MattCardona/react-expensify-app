import React from 'react';
import {connect} from 'react-redux';
import {ExpenseForm} from './ExpenseForm.js';
import {editExpense, startEditExpense, removeExpense, startRemoveExpense} from '../actions/expenses.js';
import {setFlag, unSetFlag} from '../actions/modal.js';
import Modal from 'react-modal';


class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClickRemove = () => {
    this.props.setFlag();
    // this.props.startRemoveExpense({id: this.props.expense.id});
    // this.props.history.push('/');
  };
  onClickModal = () => {
    this.props.unSetFlag();
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };
  onClickKeep = () => {
    this.props.unSetFlag();
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
          <Modal
          ariaHideApp={false}
          isOpen={this.props.modal}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          className="modal"
          >
          <h1 className="modal__title">Are you sure?</h1>
          <button className="button button--secondary" onClick={this.onClickModal}>Delete</button>
          <button className="button button--keep" onClick={this.onClickKeep}>Keep</button>
          </Modal>
            <button className="button button--secondary" onClick={this.onClickRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    modal: state.modal.flag
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense)),
  startRemoveExpense: (expenseId) => dispatch(startRemoveExpense(expenseId)),
  setFlag: () => dispatch(setFlag()),
  unSetFlag: () => dispatch(unSetFlag())
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

const ConnectedEditExpensePage = connect(mapStateToProps, mapDispatchToProps )(EditExpensePage);
export {ConnectedEditExpensePage, EditExpensePage};