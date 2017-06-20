import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App.jsx';
import PageIndex from '../containers/pageIndex/index.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
    <Route path="/edit/:index" component={PageIndex}/>
  </Route>
);