import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import NavigationStack from './NavigationStack';

class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState,
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
