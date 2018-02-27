import firebase from 'firebase';
import { NavigationActions, withNavigation } from 'react-navigation';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    // console.log('nav', this.props.navigation);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('SUCCESS');
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        loginUserFail(dispatch);
      });
  };
};

const loginUserFail = (dispatch) => {
  console.log('called fail');
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  // this.props.navigation.dispatch(resetAction);
};

// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({
//     routeName: 'ChatList',
//   })],
// });
