import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from './common';
import { navigateWithResetTo } from '../actions';

class AppEntry extends Component {
  static navigationOptions = { title: 'AppEntry' };

  componentWillMount() {
    const { timesRun } = this.props;

    if (timesRun === 1) {
      this.props.navigateWithResetTo('Home');
      return;
    }
    this.props.navigateWithResetTo('Login', { message: 'Log In' });
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

export default connect(mapStateToProps, { navigateWithResetTo })(AppEntry);
