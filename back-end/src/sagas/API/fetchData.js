import { getData } from 'utils/firebase';
import { FIREBASE_ROOT } from 'constants/config';
import { fakeContentObjectGenerator, productsDetail, messageItems } from 'utils/fakeData';

export const fetchingFirebaseData = (action) => {
  const getFakeData = 
      process.env.NODE_ENV === 'development' &&
      process.env.REACT_APP_FAKE === 'true';

  if (getFakeData) console.log('fake data was using.');

  return getFakeData ? (
    Promise.resolve({
      tw: fakeContentObjectGenerator(),
      jp: fakeContentObjectGenerator(),
      en: fakeContentObjectGenerator(),
      productsDetail,
      messageItems,
    })
  ) : (
    getData(FIREBASE_ROOT)
      .then((rootObject) => {
        return rootObject;
      })
      .then((rootObject) => {
        // parse messageItems Object into array
        const messageItems = Object.values(rootObject.messageItems);
        return({
          ...rootObject,
          messageItems,
        })
      })
      .catch((error) => {
        return false;
      })
  );
}
