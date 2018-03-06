import {
  USER_UPDATE,
  USER_CREATE,
  USER_SAVE_SUCCESS,
  RESET_USER_FORM,
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
};

export default (state = INITIAL_STATE, action) => {
  // console.log('userFormReducer', state);
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_CREATE:
      return INITIAL_STATE;
    case USER_SAVE_SUCCESS:
      return INITIAL_STATE;
    case RESET_USER_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
