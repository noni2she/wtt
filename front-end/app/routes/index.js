import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PageIndex from 'components/page_index/index.jsx';
import App from 'components/app.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
  </Route>
);

