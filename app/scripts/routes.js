import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import App from './pages/App.jsx';
import Home from './pages/Home.jsx';
import City from './pages/City.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/city' component={City}/>
      <Redirect from="/*" to="/" />
    </Route>
  </Router>
);

export default routes;
