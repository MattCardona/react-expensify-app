import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

 // onClick={props.dispatch(removeExpense({id: id}))}
const ExpenseListItem = ({dispatch, id, description, amount, createdAt})=> (
  <div>
    <Link to={"/edit/" + id }><h3>{description}</h3></Link>
    <p>This expense is: {description}. The current balance is: {amount}. and it was created on: {createdAt}</p>
  </div>
);

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export {ConnectedExpenseListItem, ExpenseListItem};