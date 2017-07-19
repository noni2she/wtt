import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from 'constants/actionTypes';

// API
import { fetchingFirebaseData } from './API/fetchData';


export function* fetchDataInit(action) {
  const rootObject = yield call(fetchingFirebaseData, action);

  //  return login status when fetching from firebase
  yield put(rootObject ? ({
      type: Constants.FETCH_FIREBASE_DATA_SUCCESS,
      payload: {
        ...rootObject
      }
    }) : ({
      type: Constants.FETCH_FIREBASE_DATA_FAIL,
      payload: Constants.FETCH_FIREBASE_DATA_FAIL,
    })
  );
}

function* rootSaga() {
  yield takeEvery(Constants.FETCH_FIREBASE_DATA_INIT, fetchDataInit);
}

export default rootSaga;
