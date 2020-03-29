import { LOGIN_SUCCESS } from '../actions';

const INITIAL_STATE = {
  user: {
    loggedIn: false
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          loggedIn: true
        }
      };
    default:
      return state;
  }
}
