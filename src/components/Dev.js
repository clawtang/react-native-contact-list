import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import {
  runApp,
  resetCount,
  appOpened,
  resetUser,
} from '../actions';


class Dev extends Component {
  static navigationOptions = {
    title: 'Dev'
  }

  componentWillMount() {
    this.props.appOpened();
  }

  runApp() {
    // when not using dev screen, this needs to be moved
    this.props.runApp();
  }

  resetCount() {
    this.props.resetCount();
  }

  resetUser() {
    this.props.resetUser();
  }

  render() {
    // console.log('render dev', this.props);
    return (
      <View style={styles.container}>
        <Text>Dev Menu</Text>
        <Button onPress={this.runApp.bind(this)}>Run App</Button>
        <Text>Run {this.props.timesRun} Times</Text>
        <Button onPress={() => this.resetCount()}>Reset Opened Count</Button>
        <Button onPress={() => this.resetUser()}>Reset User State</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ appStats }) => {
  const { timesRun } = appStats;

  return { timesRun };
};
export default connect(mapStateToProps, {
  runApp, resetCount, appOpened, resetUser
})(Dev);