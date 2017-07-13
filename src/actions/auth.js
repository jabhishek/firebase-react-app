import {AUTH} from '../constants/action-types';

export const login = user => {
  return {
    type: AUTH.LOGIN_USER,
    user
  }
};

export const logout = () => {
  return {
    type: AUTH.LOGOUT_USER
  }
};
