import * as Constants from './common';
import { contentObject } from '../utils/fakeData';

export const loginStatusInitialState = {
  loginComfirm: undefined,
	loginMessage: undefined,
  loginLoading: false,
};

export const localesInitialState = Constants.LOCALE_TW;

// pass fake for twInitialState
export const twInitialState = contentObject;