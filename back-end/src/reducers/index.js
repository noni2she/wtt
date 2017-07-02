import { combineReducers } from 'redux';
import topBanner from './topBanner';
import loginStatus from './loginStatus';
import locales from './locales';

const rootReducer = combineReducers({
  loginStatus,
  locales,
});

export default rootReducer;