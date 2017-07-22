import { combineReducers } from 'redux';
import loginStatus from './loginStatus';
import locales from './locales';
import productsDetail from './productsDetail';
import tw from './i18n/tw';
import jp from './i18n/jp';
import en from './i18n/en';
import messageItems from './messageItems';

const rootReducer = combineReducers({
  loginStatus,
  locales,
  tw,
  jp,
  en,
  productsDetail,
  messageItems,
});

export default rootReducer;