import { LOGIN_AUTH_SUCCESS, LOGIN_AUTH_FAILED } from '../constants/actionTypes';
import { loginStatusInitialState } from '../constants/initialState';

export default (state = loginStatusInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_AUTH_SUCCESS:
      return payload;
    case LOGIN_AUTH_FAILED:
      return payload;
    default: 
      return state;
  }
}