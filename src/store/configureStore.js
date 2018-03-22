import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {expensesReducer} from '../reducers/expenses.js';
import {filterReducer} from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';
import {modalReducer} from '../reducers/modal.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer,
      modal: modalReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};



export {configureStore};