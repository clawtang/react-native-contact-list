import {
  FETCH_USERS,
  TEST_USERS_FETCH_SUCCESS,
  CLEAR_TEST_USER_DATA,
  USERS_FETCH_SUCCESS,
  RESET_USER,
  TOGGLE_USER_AUTOFETCH,
} from '../actions/types';

const INITIAL_STATE = {
  loadingUsers: true,
  autoFetchUsers: false,
  testUsers: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log('userReducer', state);
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loadingUsers: true };
    case USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload, loadingUsers: false };
    case TEST_USERS_FETCH_SUCCESS:
      return { ...state, testUsers: action.payload, loadingUsers: false };
    case CLEAR_TEST_USER_DATA:
      return { ...state, testUsers: {} };
    case TOGGLE_USER_AUTOFETCH:
      return { ...state, autoFetchUsers: !state.autoFetchUsers };
    case RESET_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
