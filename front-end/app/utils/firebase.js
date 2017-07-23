import firebase from 'firebase';
import {
  FIREBASE_CONFIG
} from 'constants/config';

// firebase init
firebase.initializeApp(FIREBASE_CONFIG);

// get firebase root object
export const getFirebase = () => {
  return firebase;
}

/* set() 
 * to save data to a specified reference, including any child nodes. 
 * Replace any existing data at that path.
 */
export const setData = (url, data) => {
  // prevent empty or undefined.
  if (typeof url !== 'string' || typeof data !== 'object') return;
  
  // return true that means save successfully.
  return firebase.database().ref(url).set(data)
    .then((result) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

/* once() 
 * Read data once.
 * retrieve the data in the snapshot with the val() method.
 * 
 * @event: 
 *  'value' is used to Read and listen for changes to the entire contents of a path.
 * 
 * @return:
 *   return the Object which store under that path. 
 */
export const getData = (url) => {
  // prevent empty or undefined.
  if (typeof url !== 'string') return;

  return firebase.database().ref(url).once('value')
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((error) => {
      // return false that means get nothing back.
      console.error(error);
      return false;
    });
}

/* push
 * Push item into an array
 *
 * @return
 *  true: push succeed.
 *  false: push failed.
 */
export const pushData = (url, data) => {
  return firebase.database().ref(url).push().set(data)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
