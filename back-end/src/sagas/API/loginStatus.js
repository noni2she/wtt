import { getFirebase } from '../../utils/firebase';

export const getLoginStatus = (action) => {
  const firebase = getFirebase();
  const { email, password } = action.payload

  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      return ({
        loginComfirmed: true,
        loginMessage: 'successfully',
      });
    })
    .catch(function(err) {
      return ({
        loginComfirmed: false,
        loginMessage: err.message,
      });
    });
}

