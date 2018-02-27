import {
  SELECT_USER,
  FETCH_USERS,
  USERS_FETCH_SUCCESS,
} from './types';

export const selectUser = (username) => {
  return {
    type: SELECT_USER,
    payload: username
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS });

    const url = 'https://randomuser.me/api/?results=50';

    fetch(url)
      .then(res => res.json())
      .then(users => {
        dispatch({ type: USERS_FETCH_SUCCESS, payload: users });
      })
      .catch(err => console.log(err));
  };
};
