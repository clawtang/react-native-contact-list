import React, { Component } from 'react';
import {
  // View,
  // Text,
  // StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from './common';
import {
  navigateToHome,
  navigateToLogin,
} from '../actions';

class AppEntry extends Component {
  static navigationOptions = {
    title: 'AppEntry'
  }

  componentWillMount() {
    const { timesRun } = this.props;

    if (timesRun === 1) {
      console.log('intro screen');
      this.props.navigateToHome();
      return;
    }
    console.log('login');
    this.props.navigateToLogin({ message: 'Log In' });
  }

  render() {
    return (
      <Spinner size="large" />
    );
  }
}

const mapStateToProps = ({ appStats }) => {
  const { timesRun } = appStats;

  return { timesRun };
};

export default connect(mapStateToProps, {
  navigateToHome, navigateToLogin
})(AppEntry);
