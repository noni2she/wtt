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

// function
import { hashLinkScroll } from 'utils/common';

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

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={hashLinkScroll}
    />
  </Provider>, document.getElementById('root')
);
