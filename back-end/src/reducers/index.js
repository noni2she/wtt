import { combineReducers } from 'redux';
import topBanner from './topBanner';
import loginStatus from './loginStatus';

const rootReducer = combineReducers({
  loginStatus,
  topBanner,
});

export default rootReducer;