import expenses from '../fixtures/expenses.js';
import {getExpenseTotal} from '../../selectors/expenses-total.js';

test("should return 0 if no expenses", () => {
  const total = getExpenseTotal([]);
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  const total = getExpenseTotal([expenses[0]]);
  expect(total).toBe(195);
});

test("should correctly add up multiple expenses", () => {
  const total = getExpenseTotal(expenses);
  expect(total).toBe(114195);
});