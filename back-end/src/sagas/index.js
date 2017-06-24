import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from '../constants/actionTypes';

// API
import { getLoginStatus } from './API/loginStatus';

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

function* rootSaga() {
  yield takeEvery(Constants.LOGIN_ON_AUTH, fetchLoginStatus);
}

export default rootSaga;