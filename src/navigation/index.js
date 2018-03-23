import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import NavigationStack from './NavigationStack';
// import { appOpened } from '../actions';

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

// adding an appOpened call here and mapping it to dispatch
// led to dispatch being undefined everywhere else in
// the app

class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.nav
  };
};

export default connect(mapStateToProps)(AppNavigation);
