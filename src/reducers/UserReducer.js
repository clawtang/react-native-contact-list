import data from './UserData.json';
import {
  FETCH_USERS
} from '../actions/types';

const INITIAL_STATE = { users: data };

export default (state = INITIAL_STATE, action) => {
  // console.log('state in reducer', state);
  switch (action.type) {
    case FETCH_USERS:
      return state;
    default:
      return state;
  }
};
