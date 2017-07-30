import faker from 'faker';
import { times, map } from 'lodash'; // warning, lodash only for developing

// faker locale
faker.locale = "zh_TW";

/*
 * Array generator
 * @argc:
 *   itemGenerator: the function of fake data generator
 *   count: array length
 * @return: (Array)
 */
const generateArray = (itemGenerator, count = 5) => {
  return map(times(count), itemGenerator);
}

/* fake data generator */
const fakeImgUrl = () => 'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FBN_1.png?alt=media&token=907cf74f-117e-49d8-b9e1-95f0749f39c4';
const fakeDownloadUrl = () => 'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FBN_1.png?alt=media&token=907cf74f-117e-49d8-b9e1-95f0749f39c4';
const fakeLink = () => faker.internet.url();
const fakeHeader = () => faker.lorem.word();
const fakeSubheader = () => faker.lorem.sentence();
const fakeDescription = () => faker.lorem.sentence();
const fakeParagraph = () => faker.lorem.paragraph();
const fakeEmail = () => faker.internet.email();
const fakeAltText = () => faker.lorem.word();
const fakeName = () => faker.internet.userName();
const fakeDate = () => faker.date.past();
const fakeAddress = () => faker.address.streetAddress();
const fakePhone = () => faker.phone.phoneNumber()
const fakerCompany = () => faker.company.companyName();
const uuid = () => faker.random.uuid();


// item 
const imgItem = () => {
  return({
    displayed: true,
    id: uuid(),
    timestamps: new Date().toString(),
    altText: fakeAltText(),
    imgUrl: fakeImgUrl(),
    link: '',
  });
};
    
const messageItem = () => {
  return ({
    id: uuid(),
    timestamps: fakeDate().toString(),
    sender: fakeName(),
    receiverEmail: fakeEmail(),
    content: fakeParagraph(),
  });
}

const newsItem = () => {
  return ({
    displayed: true,
    id: uuid(),
    timestamps: new Date().toString(),
    header: fakeHeader(),
    subheader: fakeSubheader(),
    description: fakeDescription(),
    mainImg: imgItem(),
    date: fakeDate().toString(),
    position: fakeAddress(),
  });
};

const downloadItem = () => {
  return ({
    displayed: true,
    id: uuid(),
    timestamps: new Date().toString(),
    mainImg: imgItem(),
    title: fakeSubheader(),
    description: generateArray(fakeDescription),
    link: generateArray(() => {
      return ({
        key: fakeDescription(),
        linkUrl: fakeDownloadUrl(),
      });
    }),
  });
};

const seriesDescriptionItem = () => {
  return({
    title: fakeHeader(),
    content: fakeDescription(),
  });
}

const seriesItem = () => {
  return ({
    displayed: true,
    id: uuid(),
    key: 'hs',
    name: 'ASIA TYPE-SHA Series',
    shortName: 'SHA',
    mainImg: imgItem(),
    subImg: imgItem(),
    description: generateArray(seriesDescriptionItem),
    content: [{
      key: 'uuid',
      displayedName: 'id',
    }, {
      key: 'val0',
      displayedName: 'PCD'
    }, {
      key: 'val1',
      displayedName: 'HUB'
    }, {
      key: 'val2',
      displayedName: 'Thread Type'
    }, {
      key: 'val3',
      displayedName: 'O.D(mm)'
    }, {
      key: 'val4',
      displayedName: 'Car Model'
    }, {
      key: 'val5',
      displayedName: 'Part Number'
    }],
  });
}

const categoryItem = () => {
  return ({
    displayed: true,
    id: uuid(),
    key: 'wheelSpacers',
    name: 'WHEEL SPACERS',
    mainImg: imgItem(),
    seriesItems: generateArray(seriesItem, 1),
  });
}

const mockProductDetail = [{"val0":"5H/108","val1":"Φ63.4","val2":"M12xP1.50xL23","val3":149,"val4":"Ford","val5":"SHA-121263477-15"},{"val0":"5H/108","val1":"Φ63.4","val2":"M12xP1.50xL23","val3":149,"val4":"","val5":"SHA-121263477-20"},{"val0":"5H/108","val1":"Φ63.4","val2":"M12xP1.50xL23","val3":149,"val4":"","val5":"SHA-121263477-25"},{"val0":"5H/108","val1":"Φ63.4","val2":"M12xP1.50xL23","val3":149,"val4":"","val5":"SHA-121263477-30"},{"val0":"5H/108","val1":"Φ63.4","val2":"M14xP1.50xL27","val3":149,"val4":"Ford","val5":"SHA-121263499-15"},{"val0":"5H/108","val1":"Φ63.4","val2":"M14xP1.50xL27","val3":149,"val4":"","val5":"SHA-121263499-20"},{"val0":"5H/108","val1":"Φ63.4","val2":"M14xP1.50xL27","val3":149,"val4":"","val5":"SHA-121263499-25"}];


// export fake data which should be similar to what in firebase
export const fakeContentObjectGenerator = () => {
  return ({
    topBanner: {
      imgItems: generateArray(imgItem)
    },
    news: {
      header: fakeHeader(),
      subheader: fakeSubheader(),
      newsItems: generateArray(newsItem),
    },
    about: {
      header: fakeHeader(),
      description: fakeParagraph(),
    },
    contact: {
      header: fakeHeader(),
      subheader: fakeSubheader(),
      map: '', // TODO: infomation for google map
      mainImg: imgItem(),
      subImg: imgItem(),
      company: fakerCompany(),
      phone: fakePhone(),
      fax: fakePhone(),
      email: fakePhone(),
      location: fakeAddress(),
      sns: {
        fb: {
          link: fakeLink()
        },
        skype: {
          link: fakeLink()
        }
      }
    },
    download: {
      header: fakeHeader(),
      subheader: fakeSubheader(),
      downloadItems: generateArray(downloadItem),
    },
    products: {
      header: fakeHeader(),
      subheader: fakeSubheader(),
      categoryItems: generateArray(categoryItem, 1)
    }
  });
};

export const productsDetail = {
  [categoryItem().key]: {
    [seriesItem().key]: mockProductDetail.map((item) => {
      return {...item, uuid: uuid()}
    }),
  }
}

export const messageItems = generateArray(messageItem, 5);
