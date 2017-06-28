import faker from 'faker';

// faker locale
faker.locale = "zh_TW";

/* Common Function */
const generateArray = (item, times = 5) => {
  return Array.apply(null, new Array(times)).map(() => item);
}

/* fake data generator */
const fakeImgUrl = 'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FAD_1.png?alt=media&token=891d542c-969d-402c-94b2-a43d0eef4c18';
const fakeDownloadUrl = 'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FAD_1.png?alt=media&token=891d542c-969d-402c-94b2-a43d0eef4c18';
const fakeLink = faker.internet.url();
const fakeHeader = faker.lorem.word();
const fakeSubheader = faker.lorem.sentence();
const fakeDescription = faker.lorem.sentence();
const fakeParagraph = faker.lorem.paragraph();
const fakeEmail = faker.internet.email();
const fakeAltText = faker.lorem.word();
const fakeName = faker.internet.userName();
const fakeDate = faker.date.past();
const fakeAddress = faker.address.streetAddress();
const fakePhone = faker.phone.phoneNumber()
const fakerCompany = faker.company.companyName();
const uuid = () => faker.random.uuid();


// item 
const imgItem = {
  displayed: true,
  id: uuid(),
  timestamps: new Date(),
  altText: fakeAltText,
  imgUrl: fakeImgUrl,
  link: '',
  height: '',
  width: '',
};
    
const messageItem = {
  displayed: true,
  id: uuid(),
  timestamps: new Date(),
  sender: fakeName,
  receiverEmail: fakeEmail,
  content: fakeParagraph,
}

const newsItem = {
  displayed: true,
  id: uuid(),
  timestamps: new Date(),
  header: fakeHeader,
  subheader: fakeSubheader,
  description: fakeDescription,
  mainImg: imgItem,
  date: fakeDate,
  position: fakeAddress,
};

const downloadItem = {
  displayed: true,
  id: uuid(),
  timestamps: new Date(),
  mainImg: imgItem,
  title: fakeSubheader,
  description: generateArray(fakeDescription),
  link: generateArray({
    key: fakeDescription,
    linkUrl: fakeDownloadUrl,
  }),
};

const seriesDescriptionItem = {
  title: 'Material',
  // content: fakeParagraph,
  content: 'Forged Aluminum 6061T6',
}
const seriesItem = {
  displayed: true,
  id: uuid(),
  key: 'hs',
  name: 'ASIA TYPE-SHA Series',
  mainImg: imgItem,
  subImg: imgItem,
  description: generateArray(seriesDescriptionItem, 10),
  content: [{
    key: 'pcd',
    displayedName: 'PCD'
  }, {
    key: 'hub',
    displayedName: 'HUB'
  }, {
    key: 'thread-type',
    displayedName: 'Thread Type'
  }, {
    key: 'od',
    displayedName: 'O.D(mm)'
  }, {
    key: 'car-modal',
    displayedName: 'Car Model'
  }, {
    key: 'part-number',
    displayedName: 'Part Number'
  }]

}
const categoryItem = {
  displayed: true,
  id: uuid(),
  key: 'wheel-spacers',
  name: 'WHEEL SPACERS',
  mainImg: imgItem,
  seriesItems: generateArray(seriesItem, 12),
}

const mockProductDetail = [{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.25xL23","od":149,"car-modal":"Suzuki","part-number":"SHA-1154166-15"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.25xL23","od":149,"car-modal":"","part-number":"SHA-1154166-20"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.25xL23","od":149,"car-modal":"","part-number":"SHA-1154166-25"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.25xL23","od":149,"car-modal":"","part-number":"SHA-1154166-30"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.50xL23","od":149,"car-modal": "Mazda Scion Toyota Hyundai Kia","part-number":"SHA-1154177-15"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1154177-20"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1154177-25"},
{"pcd":"4H/100","hub":"Φ54.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1154177-30"},
{"pcd":"4H/100","hub":"Φ56.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"Acura \nHonda Mitsubishi kia","part-number":"SHA-1156177-15"},
{"pcd":"4H/100","hub":"Φ56.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1156177-20"},
{"pcd":"4H/100","hub":"Φ56.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1156177-25"},
{"pcd":"4H/100","hub":"Φ56.1","thread-type":"M12xP1.50xL23","od":149,"car-modal":"","part-number":"SHA-1156177-30"}]


// export fake data which should be similar to what in firebase
export const contentObject = {
  topBanner: {
    imgItems: generateArray(imgItem)
  },
  news: {
    header: fakeHeader,
    subheader: fakeSubheader,
    newsItems: generateArray(newsItem),
  },
  about: {
    header: fakeHeader,
    description: fakeParagraph,
  },
	contact: {
	  header: fakeHeader,
    subheader: fakeSubheader,
    map: '',
    mainImg: imgItem,
    subImg: imgItem,
    company: fakerCompany,
    phone: fakePhone,
    fax: fakePhone,
    email: fakePhone,
    location: fakeAddress,
    sns: {
      fb: {
        link: fakeLink
      },
      skype: {
        link: fakeLink
      }
    }
  },
  download: {
    header: fakeHeader,
    subheader: fakeSubheader,
    downloadItem: generateArray(downloadItem),
  },
  products: {
    header: fakeHeader,
    subheader: fakeSubheader,
    categoryItems: generateArray(categoryItem, 10)
  }
};

export const productDetails = {
  [categoryItem.key]: {
    [seriesItem.key]: mockProductDetail,
  }
}

export const messageObject = {
  header: fakeHeader,
  messageItems: generateArray(messageItem),
};