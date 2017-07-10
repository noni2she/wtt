import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageIndex from 'containers/pageIndex/index.jsx';
import App from 'containers/app.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
  </Route>
);

