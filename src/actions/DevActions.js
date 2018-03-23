import {
  RESET_COUNT,
  RUN_APP,
  RESET_USER,
  RESET_AUTH,
  RESET_USER_FORM,
  // GO_CHAT,
  GO_USER_CREATE,
  LOGIN_USER_SUCCESS,
} from './types';


export const resetCount = () => {
  return {
    type: RESET_COUNT
  };
};

export const runApp = () => {
  return {
    type: RUN_APP
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER
  };
};

export const resetAuth = () => {
  return {
    type: RESET_AUTH
  };
};

export const resetUserForm = () => {
  return {
    type: RESET_USER_FORM
  };
};

export const skipToChatList = () => {
  return {
    type: LOGIN_USER_SUCCESS
  };
};

export const skipToUserCreate = () => {
  return {
    type: GO_USER_CREATE,
  };
};
