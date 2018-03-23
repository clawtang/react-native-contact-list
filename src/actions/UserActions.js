import _ from 'lodash';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  USER_UPDATE,
  USER_CREATE,
  FETCH_USERS,
  TEST_USERS_FETCH_SUCCESS,
  CLEAR_TEST_USER_DATA,
  USERS_FETCH_SUCCESS,
  USER_SAVE_SUCCESS,
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
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: FETCH_USERS });
    firebase.database().ref(`/users/${currentUser.uid}/users`)
      .on('value', snapshot => {
        dispatch({ type: USERS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const fetchTestUsers = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: FETCH_USERS });

    const url = 'https://randomuser.me/api/?results=3';

    fetch(url)
      .then(res => res.json())
      .then(users => {
        _.map(users.results, user => user)
        .forEach(user => {
          const updatedUser = {
            ...user,
            isTest: true,
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.login.username,
            email: user.email,
          };

          firebase.database().ref(`/users/${currentUser.uid}/users`)
          .push(updatedUser);
        })
        .then(() => {
          dispatch({ type: TEST_USERS_FETCH_SUCCESS, payload: users });
        });
      })
      .catch(err => console.log(err));
  };
};

export const clearTestUserData = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/users`)
    .once('value')
      .then(snapshot => {
        const usersToDelete = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        }).filter(user => user.isTest);
        usersToDelete.forEach(user => {
          firebase.database().ref(`/users/${currentUser.uid}/users/${user.uid}`).remove();
        });
        dispatch({ type: CLEAR_TEST_USER_DATA });
      });
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

export const userSave = ({ firstName, lastName, username, email, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/users/${uid}`)
      .set({ firstName, lastName, username, email })
      .then(() => {
        dispatch({ type: USER_SAVE_SUCCESS });
      });
  };
};

export const userDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/users/${uid}`)
      .remove()
      .then(() => dispatch(NavigationActions.pop()));
  };
};
