import {
  FETCH_USERS,
  USERS_FETCH_SUCCESS,
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
    default:
      return state;
  }
};
