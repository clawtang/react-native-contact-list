import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SelectedUserReducer from './SelectedUserReducer';

export default combineReducers({
  users: UserReducer,
  selectedUser: SelectedUserReducer
});
