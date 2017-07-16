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
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FAD_1.png?alt=media&token=891d542c-969d-402c-94b2-a43d0eef4c18',
    altText: '',
  });
}

export const newsItemDefaultGenerator = () => {
  return({
    displayed: false,
    id: uuid(),
    timestamps: new Date().toString(),
    header: '',
    subheader: '',
    description: '',
    mainImg: imgItemDefaultGenerator(),
    date: '',
    position: '',
  });
}

export const downloadItemDefaultGenerator = () => {
  return ({
    displayed: false,
    id: uuid(),
    timestamps: new Date().toString(),
    mainImg: imgItemDefaultGenerator(),
    title: 'downloadItem',
    description: [],
    link: [],
  });
}

export const seriesDefaultGenerator = () => {
  return ({
    displayed: false,
    id: uuid(),
    key: 'keyName',
    name: 'Series header',
    shortName: 'New series',
    mainImg: imgItemDefaultGenerator(),
    subImg: imgItemDefaultGenerator(),
    description: [],
    content: [{
      key: 'uuid',
      displayedName: 'id',
    }, {
      key: 'col1',
      displayedName: 'column 1'
    }, {
      key: 'col2',
      displayedName: 'column 2'
    }, {
      key: 'col3',
      displayedName: 'column 3'
    }, {
      key: 'col4',
      displayedName: 'column 4'
    }, {
      key: 'col5',
      displayedName: 'column 5'
    }, {
      key: 'col6',
      displayedName: 'column 6'
    }],
  });
}
