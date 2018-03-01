import {
  RESET_COUNT,
  RUN_APP,
  RESET_USER,
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
