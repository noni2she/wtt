import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import PageIndex from 'containers/pageIndex';
import PageProduct from 'containers/pageProduct';
import PageDownload from 'containers/pageDownload';
import App from 'containers/app.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
    <Route path="/product/:categoryKey/:seriesKey" component={PageProduct} />
    <Route path="/download" component={PageDownload} />
    <Redirect from="*" to="/" />
  </Route>
);

