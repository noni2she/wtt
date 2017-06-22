import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory} from 'react-router';
import routes from './routes/index.js';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './assets/stylesheet/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// mount it on the Store
const store = createStore(
  reducers
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
