import {
  FETCH_USERS,
  USERS_FETCH_SUCCESS,
  RESET_USER,
} from '../actions/types';

const INITIAL_STATE = {
  loadingUsers: true
};

export default (state = INITIAL_STATE, action) => {
  // console.log('state', state);
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loadingUsers: true };
    case USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload, loadingUsers: false };
    case RESET_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
