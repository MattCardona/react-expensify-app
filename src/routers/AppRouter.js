import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {ExpenseDashBoardPage} from '../components/ExpenseDashBoardPage.js';
import {ConnectedAddExpensePage} from '../components/AddExpensePage.js';
import {ConnectedEditExpensePage} from '../components/EditExpensePage.js';
import {HelpPage} from '../components/HelpPage.js';
import {NotFoundPage} from '../components/NotFoundPage.js';
import {Header} from '../components/Header.js';

const AppRouter = () => {
  return (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
        <Route path="/create" component={ConnectedAddExpensePage} />
        <Route path="/edit/:id" component={ConnectedEditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)};

export {AppRouter};