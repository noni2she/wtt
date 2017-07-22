import * as Constants from './common';
import { uuid } from 'utils/common';
/*
 * The following are initial state generator
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

export const categoryDefaultGenerator = () => {
  return ({
    displayed: false,
    id: uuid(),
    key: 'keyName',
    name: 'New Category',
    mainImg: imgItemDefaultGenerator(),
    seriesItems: [],
  });
}

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
}

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

// pass fake data for productDetails
export const productsDetailInitialState = {};
export const messageItemsInitialState = [];
