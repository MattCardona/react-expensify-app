import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage.js';
import {ExpenseDashBoardPage} from '../components/ExpenseDashBoardPage.js';
import {ConnectedAddExpensePage} from '../components/AddExpensePage.js';
import {ConnectedEditExpensePage} from '../components/EditExpensePage.js';
import {HelpPage} from '../components/HelpPage.js';
import {NotFoundPage} from '../components/NotFoundPage.js';
import PrivateRoute from './PrivateRoute.js';

const history = createHistory();

const AppRouter = () => {
  return (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
        <PrivateRoute path="/create" component={ConnectedAddExpensePage} />
        <PrivateRoute path="/edit/:id" component={ConnectedEditExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)};

export {AppRouter, history};