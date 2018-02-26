import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


class UserProfile extends Component {
  render() {
    // const {
      // firstName,
      // lastName,
      // email,
      // image,
    // } = this.props;

    return (
      <View style={styles.container}>
        <Text>Component: UserProfile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserProfile;
