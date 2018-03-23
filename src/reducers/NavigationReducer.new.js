import AppNavigator from '../navigation/NavigationStack';


const INITIAL_STATE = AppNavigator.router.getStateForAction(
  //this should be the entry component path
  AppNavigator.router.getActionForPathAndParams('Dev')
);

export default (state = INITIAL_STATE, action) => {
  // console.log('navReducer', state);
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
