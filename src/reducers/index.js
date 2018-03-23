import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SelectedUserReducer from './SelectedUserReducer';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer';
import AppStatsReducer from './AppStatsReducer';
import DevReducer from './DevReducer';
import UserFormReducer from './UserFormReducer';

export default combineReducers({
  users: UserReducer,
  selectedUser: SelectedUserReducer,
  auth: AuthReducer,
  nav: NavigationReducer,
  appStats: AppStatsReducer,
  dev: DevReducer,
  userForm: UserFormReducer,
});
