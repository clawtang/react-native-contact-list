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
  resetAuth,
  resetUserForm,
  navigateWithResetTo,
  fetchTestUsers,
  clearTestUserData,
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

  resetAuth() {
    this.props.resetAuth();
  }

  resetUserForm() {
    this.props.resetUserForm();
  }

  skipToChatList() {
    // this.props.skipToChatList();
    // this.props.navigation.navigate('ChatList');
    this.props.navigateWithResetTo('DrawerStack');
  }

  addTestUserData() {
    this.props.fetchTestUsers();
  }

  skipToUserCreate() {
    this.props.skipToUserCreate();
  }

  render() {
    // console.log('render dev', this.props);
    return (
      <View style={styles.container}>
        <Text>Dev Menu</Text>
        <Button onPress={this.runApp.bind(this)}>Run App</Button>
        <Text>Logs</Text>
        <Button onPress={() => console.log('Dev Menu: ', this.props)}>Log State</Button>
        <Text>Run {this.props.appStats.timesRun} Times</Text>
        <Button onPress={() => this.resetCount()}>Reset Opened Count</Button>
        <Text>Test Data</Text>
        <Button onPress={() => this.addTestUserData()}>Add User Data</Button>
        <Button onPress={() => this.props.clearTestUserData()}>Clear User Data</Button>
        <Text>Reset States</Text>
        <Button onPress={() => this.resetUser()}>Reset User State</Button>
        <Button onPress={() => this.resetUserForm()}>Reset User Form State</Button>
        <Button onPress={() => this.resetAuth()}>Reset Auth State</Button>
        <Text>Nav shortcuts</Text>
        <Button onPress={() => this.skipToChatList()}>Skip to Chat List</Button>
        <Button onPress={() => this.skipToUserCreate()}>Skip to User Create</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  runApp,
  resetCount,
  appOpened,
  resetUser,
  resetAuth,
  resetUserForm,
  navigateWithResetTo,
  fetchTestUsers,
  clearTestUserData,
})(Dev);
