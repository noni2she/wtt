import { LOGIN_AUTH_SUCCESS, LOGIN_AUTH_FAILED, LOGIN_ON_AUTH} from 'constants/actionTypes';
import { loginStatusInitialState } from 'constants/initialState';

export default (state = loginStatusInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_AUTH_SUCCESS:
      return payload;
    case LOGIN_AUTH_FAILED:
      return payload;
    case LOGIN_ON_AUTH:
      return({
        ...state,
        loginLoading: payload.loginLoading,
      });
    default: 
      return state;
  }
}