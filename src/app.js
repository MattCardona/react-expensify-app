import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AppRouter} from './routers/AppRouter.js';
import {configureStore} from './store/configureStore.js';
import {addExpense, startSetExpenses, removeExpense, editExpense} from './actions/expenses.js';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters.js';
import {getVisibleExpenses} from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase.js';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />

  </Provider>
  );

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
