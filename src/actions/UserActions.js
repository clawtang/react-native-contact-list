import firebase from 'firebase';
import {
  USER_UPDATE,
  USER_CREATE,
  FETCH_USERS,
  USERS_FETCH_SUCCESS,
} from './types';

// export const selectUser = (username) => {
//   return {
//     type: SELECT_USER,
//     payload: username
//   };
// };

export const userUpdate = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
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

export const userCreate = ({ firstName, lastName, username, email }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/users`)
    .push({ firstName, lastName, username, email })
    .then(() => {
      dispatch({ type: USER_CREATE });
    });
  };
};
