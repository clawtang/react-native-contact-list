import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SelectedUserReducer from './SelectedUserReducer';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer';
import AppStatsReducer from './AppStatsReducer';

export default combineReducers({
  users: UserReducer,
  selectedUser: SelectedUserReducer,
  auth: AuthReducer,
  nav: NavigationReducer,
  appStats: AppStatsReducer,
});
