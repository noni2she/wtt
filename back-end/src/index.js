import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';

// for redux
import routes from './routes/index.js';
import reducers from './reducers';
import rootSaga from './sagas/';

// for production build
import registerServiceWorker from './registerServiceWorker';

// style part
import './assets/stylesheet/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
