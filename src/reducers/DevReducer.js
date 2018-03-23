import {
  RESET_COUNT,
} from '../actions/types';

const INITIAL_STATE = {
  timesRun: 0,
};

export default (state = INITIAL_STATE, action) => {
  // console.log('devReducer', state);
  switch (action.type) {
    case RESET_COUNT:
      return { ...state, timesRun: 1 };
    default:
      return state;
  }
};
