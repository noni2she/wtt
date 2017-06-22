import firebase from 'firebase';
import {
  FIREBASE_CONFIG
} from '../constants/config';

// firebase init
firebase.initializeApp(FIREBASE_CONFIG);

// get firebase root object
export const getFirebase = () => {
  return firebase;
}

// get firebase database object
export const getFirebaseDatabase = () => {
  return firebase.database();
}
