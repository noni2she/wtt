import { LOGIN_ON_AUTH } from 'constants/actionTypes';

export function onLoginAuthSubmit(value) {
  return ({
    type: LOGIN_ON_AUTH,
    payload: value,
  });
}