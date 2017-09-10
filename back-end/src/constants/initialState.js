import * as Constants from './common';
import { uuid } from 'utils/common';
/*
 * The following are initial state generator
 */

export const imgItemDefaultGenerator = (contentDefault = true) => {
  // when contentDefault is false, set everything empty

  return({
    displayed: contentDefault === true,
    id: uuid(),
    timestamps: new Date().toString(),
    imgUrl: contentDefault ? 'https://firebasestorage.googleapis.com/v0/b/techwell-2ba33.appspot.com/o/static%2Fdefault-image.jpg?alt=media&token=e8f6204d-7f62-4c18-88ce-a63806871567' : '',
    altText: '',
    link: '',
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
    description: ['', '', '', '', ''],
    link: [
      {
        key: '',
        linkUrl: '',
      },
      {
        key: '',
        linkUrl: '',
      },
      {
        key: '',
        linkUrl: '',
      },
      {
        key: '',
        linkUrl: '',
      },
      {
        key: '',
        linkUrl: '',
      },
    ],
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
    downloadLink: {
      key: '',
      linkUrl: ''
    },
    description: [{
        title: '',
        content: '',
      }, {
        title: '',
        content: '',
      }, {
        title: '',
        content: '',
      }, {
        title: '',
        content: '',
      }, {
        title: '',
        content: '',
      }
    ],
    content: [{
      key: 'uuid',
      displayedName: 'id',
    }, {
      key: 'val0',
      displayedName: 'column 1'
    }, {
      key: 'val1',
      displayedName: 'column 2'
    }, {
      key: 'val2',
      displayedName: 'column 3'
    }, {
      key: 'val3',
      displayedName: 'column 4'
    }, {
      key: 'val4',
      displayedName: 'column 5'
    }, {
      key: 'val5',
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

// the following is reducer init
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

export const localesInitialState = Constants.LOCALE_EN;

// pass fake data for twInitialState
export const twInitialState = emptyContentObjectGenerator();
export const jpInitialState = emptyContentObjectGenerator();
export const enInitialState = emptyContentObjectGenerator();

// pass fake data for productsDetail
export const productsDetailInitialState = {
  ...{"val0":"5H/108","val1":"Φ63.4","val2":"M12xP1.50xL23","val3":149,"val4":"Ford","val5":"SHA-121263477-15"},
  uuid: uuid(),
}

export const messageItemsInitialState = [];
