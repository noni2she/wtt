import * as Constants from './common';

/*
 * The following are initial state generator
 */

export const emptyContentObjectGenerator = () => {
  return ({
    topBanner: {
      imgItems: [],
    },
    news: {
      header: '',
      subheader: '',
      newsItems: [],
    },
    about: {
      header: '',
      description: '',
    },
    contact: {
      header: '',
      subheader: '',
      map: '', // TODO: infomation for google map
      mainImg: '',
      subImg: '',
      company: '',
      phone: '',
      fax: '',
      email: '',
      location: '',
      sns: {
        fb: {
          link: '',
        },
        skype: {
          link: '',
        }
      }
    },
    download: {
      header: '',
      subheader: '',
      downloadItems: [],
    },
    products: {
      header: '',
      subheader: '',
      categoryItems: [],
    }
  });
};

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
export const twInitialState = emptyContentObjectGenerator();
export const jpInitialState = emptyContentObjectGenerator();
export const enInitialState = emptyContentObjectGenerator();

// pass fake data for productsDetail
export const productsDetailInitialState = {};
