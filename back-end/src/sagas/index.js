import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from 'constants/actionTypes';

// API
import { getLoginStatus } from './API/loginStatus';
import { fetchingFirebaseData } from './API/fetchData';

export function* fetchLoginStatus(action) {
  const status = yield call(getLoginStatus, action);
  const { loginComfirmed } = status;

  //  return login status when fetching from firebase
  yield put (loginComfirmed ? ({
      type: Constants.LOGIN_AUTH_SUCCESS,
      payload: { ...status, loginLoading: false}
    }) : ({
      type: Constants.LOGIN_AUTH_FAILED,
      payload: { ...status, loginLoading: false}
    })
  );
}

export function* fetchDataInit(action) {
  const rootObject = yield call(fetchingFirebaseData, action);

  //  return login status when fetching from firebase
  yield put (rootObject ? ({
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
  yield takeEvery(Constants.LOGIN_ON_AUTH, fetchLoginStatus);
  yield takeEvery(Constants.FETCH_FIREBASE_DATA_INIT, fetchDataInit);
}

export default rootSaga;