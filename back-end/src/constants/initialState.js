import * as Constants from './common';
import { contentObject, productDetails } from '../utils/fakeData';

export const loginStatusInitialState = {
  loginComfirm: undefined,
	loginMessage: undefined,
  loginLoading: false,
};

export const localesInitialState = Constants.LOCALE_TW;

// pass fake data for twInitialState
export const twInitialState = contentObject;

// pass fake data for productDetails
export const productsDetailInitialState = productDetails;
