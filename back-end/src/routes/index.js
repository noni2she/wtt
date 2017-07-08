import React from 'react';
import {
  Route, IndexRoute, IndexRedirect,
  Redirect,
} from 'react-router';

import App from 'containers/App.jsx';
import PageIndex from 'containers/pageIndex/index.jsx';
import PageProduct from 'containers/pageProduct/index.jsx';
import PageMessage from 'containers/pageMessage/index.jsx';
import PageEdit from 'containers/pageEdit/index.jsx'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex} />
    <Route path="/product/:categoryKey/:seriesKey" component={PageProduct} />
    <Route path="/messages" component={PageMessage} />
    <Route path="/edit">
      <IndexRedirect to="/" />
      <Route path="product/:categoryKey/:seriesKey" component={PageEdit} />
      <Route path=":blockType" component={PageEdit} />
    </Route>

    <Redirect from="*" to="/" />
  </Route>
);