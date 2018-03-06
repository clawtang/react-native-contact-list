import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/NavigationStack';
import {
  LOGIN_USER_SUCCESS,
  RUN_APP,
  GO_HOME,
  GO_USER_CREATE,
  GO_USER_EDIT,
  // GO_CHAT,
  GO_LOGIN,
  GO_USER_PROFILE,
  USER_SAVE_SUCCESS,
} from '../actions/types';


const INITIAL_STATE = AppNavigator.router.getStateForAction(
  //this should be the entry component path
  AppNavigator.router.getActionForPathAndParams('Dev')
);

export default (state = INITIAL_STATE, action) => {
  // console.log('navReducer', state);
  let newState;

  switch (action.type) {
    case LOGIN_USER_SUCCESS: // GO_CHAT_LIST
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'ChatList' }),
          ],
        }),
        state
      );
      break;
    case RUN_APP:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'AppEntry' }),
          ],
        }),
        state
      );
      break;
    case GO_HOME:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        }),
        state
      );
      break;
    case GO_LOGIN:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'Login',
              params: action.payload
            })
          ],
        }),
        state
      );
      break;
    case GO_USER_CREATE:
      console.log('go user create called');
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'UserCreate' }),
        state
      );
      break;
    case USER_SAVE_SUCCESS:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'ChatList',
            })
          ],
        }),
        state
      );
      break;
    case GO_USER_PROFILE:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'UserProfile',
          params: action.payload
        }),
        state
      );
      break;
    case GO_USER_EDIT:
      newState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'UserEdit',
          params: action.payload
        }),
        state
      );
      break;
    default:
      newState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
