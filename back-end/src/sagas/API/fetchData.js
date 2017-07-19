import { getData } from 'utils/firebase';
import { FIREBASE_ROOT } from 'constants/config';
import { fakeContentObjectGenerator, productDetails } from 'utils/fakeData';

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
      productDetails,
    })
  ) : (
    getData(FIREBASE_ROOT)
      .then((rootObject) => {
        return rootObject;
      })
      .catch((error) => {
        return false;
      })
  );
}
