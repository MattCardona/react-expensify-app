import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters.js';
import moment from 'moment';


test("it should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test("it should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test("it should sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test("it should sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test("it should set a text filter", () => {
  const action = setTextFilter('testing');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'testing'
  });
});

test("it should set default text filter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});