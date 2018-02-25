import {filterReducer} from '../../reducers/filters.js';
import moment from 'moment';

test("should setup default filter values", () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE', sortBy: 'date'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test("should set text filter", () => {
  const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'testing'});
  expect(state.text).toBe('testing');
});

test("should set startDate filter", () => {
  const state = filterReducer(undefined, {type: 'SET_START_DATE', date: moment(0).add(1, 'days').valueOf()});
  expect(state.startDate).toBe(86400000);
});

test("should set endDate filter", () => {
   const state = filterReducer(undefined, {type: 'SET_END_DATE', date: moment(0).subtract(1, 'days').valueOf()});
   expect(state.endDate).toBe(-86400000);
});