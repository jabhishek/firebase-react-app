// @flow
import type {User} from '../actions/auth';
type State = {

}

type Action = {
  type: string,
    user: User
}
export const userReducer = (state: State = {}, action: Action): State => {
  switch (action.type) {
  case 'LOGIN_USER_SUCCESS': {
    return action.user;
  }
  case 'LOGOUT_USER': {
    return {};
  }
  default: {
    return state;
  }
  }
};
