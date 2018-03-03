import {
  APP_OPENED,
  RESET_COUNT,
} from '../actions/types';

const INITIAL_STATE = {
  timesRun: 0,
};

export default (state = INITIAL_STATE, action) => {
  // console.log('appStatsReducer', state);
  switch (action.type) {
    case APP_OPENED:
      return { ...state, timesRun: state.timesRun + 1 };
    case RESET_COUNT:
      return { ...state, timesRun: 1 };
    default:
      return state;
  }
};
