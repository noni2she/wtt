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


// export fake date
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
  }
};

export const messageObject = {
  header: fakeHeader,
  messageItems: generateArray(messageItem),
};