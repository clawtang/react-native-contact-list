import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/NavigationStack';
import {
  LOGIN_USER_SUCCESS,
  RUN_APP,
  GO_LOGIN,
} from '../actions/types';


const INITIAL_STATE = AppNavigator.router.getStateForAction(
  //this should be the entry component path
  AppNavigator.router.getActionForPathAndParams('Dev')
);

export default (state = INITIAL_STATE, action) => {
  let newState;

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
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
    default:
      newState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
