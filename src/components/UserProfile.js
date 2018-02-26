import React, { Component } from 'react';
import {
  // View,
  Text,
  // StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
  Avatar,
  Card,
} from 'react-native-elements';


class UserProfile extends Component {

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  render() {
    const { picture, name, login, email } = this.props.user;

    console.log(this.props.user);
    return (
      <Card>
        <Avatar
          xlarge
          rounded
          source={{ uri: picture.large }}
          containerStyle={{ alignSelf: 'center' }}
        />
        <Text>first name: {this.capitalize(name.first)}</Text>
        <Text>last name: {this.capitalize(name.last)}</Text>
        <Text>username: {login.username}</Text>
        <Text>email: {email}</Text>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default connect(null)(UserProfile);
