import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import { Router, browserHistory} from 'react-router';
import bootstrap from './bootstrap';

import reducers from 'reducers';
import rootSaga from 'sagas';
import routes from 'routes';

// style part
import 'bootstrap/dist/css/bootstrap.min.css';
import 'stylesheet/index.scss';
// import 'bootstrap/dist/css/bootstrap-theme.css';

// js
import 'jquery';
import 'bootstrap';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

bootstrap(store)();

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={hashLinkScroll}
    />
  </Provider>, document.getElementById('root')
);
