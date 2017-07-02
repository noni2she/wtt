import { combineReducers } from 'redux';
import loginStatus from './loginStatus';
import locales from './locales';
import tw from './i18n/tw';

const rootReducer = combineReducers({
  loginStatus,
  locales,
  tw,
});

export default rootReducer;