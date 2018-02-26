// import { Actions } from 'react-native-router-flux';
import {
  SELECT_USER,
  FETCH_USERS
} from './types';

export const selectUser = (username) => {
  return {
    type: SELECT_USER,
    payload: username
  };
};

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};
