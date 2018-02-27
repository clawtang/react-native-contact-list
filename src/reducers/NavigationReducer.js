import AppNavigator from '../navigation/NavigationStack';

const INITIAL_STATE = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

export default (state = INITIAL_STATE, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
