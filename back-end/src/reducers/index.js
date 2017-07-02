import { combineReducers } from 'redux';
import loginStatus from './loginStatus';
import locales from './locales';
import productsDetail from './productsDetail';
import tw from './i18n/tw';

const rootReducer = combineReducers({
  loginStatus,
  locales,
  tw,
  productsDetail,
});

export default rootReducer;