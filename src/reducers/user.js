// @flow
import type {User} from '../actions/auth';
import {AUTH} from '../constants/action-types';
type State = ?User;

type Action<T> = {
    type: T,
    payload?: Object
}

type LoginSuccessAction = Action<AUTH.LOGIN_USER_SUCCESS>;
type LogoutAction = Action<AUTH.LOGOUT_USER>;

export const userReducer = (state: State = null, action: LoginSuccessAction | LogoutAction): State => {
  switch (action.type) {
  case AUTH.LOGIN_USER_SUCCESS: {
    return action.payload;
  }
  case AUTH.LOGOUT_USER: {
    return null;
  }
  default: {
    return state;
  }
  }
};
