import {AUTH} from '../constants/action-types';

export const loginSuccess = user => {
  return {
    type: AUTH.LOGIN_USER_SUCCESS,
    user
  }
};

export const logout = () => {
  return {
    type: AUTH.LOGOUT_USER
  }
};
