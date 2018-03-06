import {
  GO_HOME,
  GO_USER_CREATE,
  GO_USER_PROFILE,
  GO_USER_EDIT,
  GO_LOGIN,
} from './types';


export const navigateToHome = () => {
  return {
    type: GO_HOME
  };
};

export const navigateToUserCreate = () => {
  return {
    type: GO_USER_CREATE
  };
};

export const navigateToUserEdit = (user) => {
  console.log('action nav to user edit');
  return {
    type: GO_USER_EDIT,
    payload: user
  };
};

export const navigateToLogin = (message) => {
  return {
    type: GO_LOGIN,
    payload: message,
  };
};

export const navigateToUserProfile = (user) => {
  return {
    type: GO_USER_PROFILE,
    payload: user
  };
};
