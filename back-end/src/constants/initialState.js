import * as Constants from './common';
import { uuid } from 'utils/common';
import { fakeContentObjectGenerator, productDetails } from 'utils/fakeData';

/*
 *  The following are the initial state for reducer of redux
 */
export const loginStatusInitialState = {
  loginComfirm: undefined,
	loginMessage: undefined,
  loginLoading: false,
};

export const localesInitialState = Constants.LOCALE_TW;

// pass fake data for twInitialState
export const twInitialState = fakeContentObjectGenerator();
export const jpInitialState = fakeContentObjectGenerator();
export const enInitialState = fakeContentObjectGenerator();

// pass fake data for productDetails
export const productsDetailInitialState = productDetails;

/*
 * The following are the default state about each block
 */

export const imgItemDefaultGenerator = () => {
  return({
    displayed: false,
    id: uuid(),
    timestamps: new Date().toString(),
    imgUrl: '',
    altText: '',
  });
}
