// @flow
import {AUTH} from '../constants/action-types';

export type User = {
    photoURL: string
};

export const loginSuccess = (user: User) => {
  return {
    type: AUTH.LOGIN_USER_SUCCESS,
    user
  };
};

export const logout = () => {
  return {
    type: AUTH.LOGOUT_USER
  };
};
