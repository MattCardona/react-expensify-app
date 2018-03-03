import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


 // onClick={props.dispatch(removeExpense({id: id}))}
const ExpenseListItem = ({dispatch, id, description, amount, createdAt})=> (
  <div>
    <Link to={"/edit/" + id }><h3>{description}</h3></Link>
    <p>balance: {numeral(amount / 100).format('$0,0.00')},
     created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export {ConnectedExpenseListItem, ExpenseListItem};