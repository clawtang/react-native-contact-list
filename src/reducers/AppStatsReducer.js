import {
  APP_OPENED,
} from '../actions/types';

const INITIAL_STATE = {
  timesRun: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_OPENED:
      return { ...state, timesRun: state.timesRun + 1 };
    default:
      return state;
  }
};
