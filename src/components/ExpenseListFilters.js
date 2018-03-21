import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters.js';
import {DateRangePicker} from 'react-dates';


class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    // console.log(e.target.value);
  };
  onSortChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
   }
  render() {
    return (
     <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input className="text-input" placeholder="Search Expenses" type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
        </div>
        <div className="input-group__item">
          <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
     </div>
  )}
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export {ConnectedExpenseListFilters, ExpenseListFilters};