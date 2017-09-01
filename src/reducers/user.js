// @flow
import type {User} from '../actions/auth';
import {AUTH} from '../constants/action-types';
type State = {
    user?: User
}

type Action<T> = {
    type: T,
    payload?: Object
}

type LoginSuccessAction = Action<AUTH.LOGIN_USER_SUCCESS>;
type LogoutAction = Action<AUTH.LOGOUT_USER>;

export const userReducer = (state: State = {}, action: LoginSuccessAction | LogoutAction): State => {
  switch (action.type) {
  case AUTH.LOGIN_USER_SUCCESS: {
    return { user: action.payload };
  }
  case AUTH.LOGOUT_USER: {
    return {};
  }
  default: {
    return state;
  }
  }
};
